import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';

import createEmotionServer from '@emotion/server/create-instance';
import theme from 'styles/theme';
import createEmotionCache from 'styles/createEmotionCache';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Mulish:wght@300;400;500;600;700&display=swap"
          />
          <noscript>
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Mulish:wght@300;400;500;600;700&display=swap"
            />
          </noscript>
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link rel="shortcut icon" href="/favicon.ico" />
          {(this.props as any).emotionStyleTags}
          <meta charSet="UTF-8" />
          <link rel="manifest" href="/manifest.webmanifest" />
          <link rel="icon" type="image/ico" sizes="32x32" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="application-name" content="Isaac" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-title" content="Isaac" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const originalRenderPage = ctx.renderPage;

  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App: any) =>
        function EnhanceApp(props) {
          return <App emotionCache={cache} {...props} />;
        },
    });

  const initialProps = await Document.getInitialProps(ctx);

  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    emotionStyleTags,
  };
};
