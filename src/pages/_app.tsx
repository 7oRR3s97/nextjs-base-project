import * as React from 'react';
import type {
  AppProps,
  // NextWebVitalsMetric
} from 'next/app';
import dynamic from 'next/dynamic';
import { appWithTranslation } from 'next-i18next';
import nextI18nextConfig from 'next-i18next.config';

import { Hydrate } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import superjson from 'superjson';
import { withTRPC } from '@trpc/next';
import { httpBatchLink } from '@trpc/client/links/httpBatchLink';
import { loggerLink } from '@trpc/client/links/loggerLink';
import { AppRouter } from 'pages/api/trpc/[trpc]';
import { getBaseUrl, SSRContext } from 'helpers/trpc';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';

import { store } from 'redux/store';

import { getLocalizedTheme } from 'styles/theme';
import createEmotionCache from 'styles/createEmotionCache';
import { SessionProvider } from 'next-auth/react';

import TagManager from 'react-gtm-module';

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

// export function reportWebVitals(metric: NextWebVitalsMetric) {
//   console.log(metric);
// }

const QueryClientProvider = dynamic(
  () => import('components/Providers/queryClientProvider')
);

const App: React.FC<MyAppProps> = ({ ...props }) => {
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps,
    router,
  } = props;

  React.useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-KLKWX46' });

    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <QueryClientProvider>
      <Hydrate state={pageProps.dehydratedState}>
        <Provider store={store}>
          <SessionProvider session={pageProps.session}>
            <CacheProvider value={emotionCache}>
              <ThemeProvider theme={getLocalizedTheme(router.locale)}>
                <CookiesProvider>
                  <CssBaseline />
                  <Component {...pageProps} />
                  <ReactQueryDevtools initialIsOpen={false} />
                </CookiesProvider>
              </ThemeProvider>
            </CacheProvider>
          </SessionProvider>
        </Provider>
      </Hydrate>
    </QueryClientProvider>
  );
};

export default withTRPC<AppRouter>({
  config() {
    return {
      links: [
        // adds pretty logs to your console in development and logs errors in production
        loggerLink({
          enabled: (opts) =>
            process.env.NODE_ENV === 'development' ||
            (opts.direction === 'down' && opts.result instanceof Error),
        }),
        httpBatchLink({
          url: `${getBaseUrl()}/api/trpc`,
        }),
      ],
      transformer: superjson,
    };
  },
  ssr: true,
  responseMeta: (opts) => {
    const ctx = opts.ctx as SSRContext;

    if (ctx.status) {
      return {
        status: ctx.status,
      };
    }

    const error = opts.clientErrors[0];
    if (error) {
      return {
        status: error.data?.httpStatus ?? 500,
      };
    }
    return {};
  },
})(appWithTranslation(App, nextI18nextConfig));
