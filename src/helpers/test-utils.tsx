import React from 'react';
import {
  render as defaultRender,
  renderHook as defaultRendesHook,
  RenderHookOptions,
  RenderHookResult,
  act,
  RenderOptions,
} from '@testing-library/react';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { I18nextProvider } from 'react-i18next';
import { ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';

import { store } from 'redux/store';

import theme from 'styles/theme';
import QueryClientProvider from 'components/Providers/queryClientProvider';

const ns = [
  'account-data',
  'auth-alerts',
  'common',
  'edit-data',
  'home-page-callout',
  'login',
  'menu',
  'seo-home-page',
  'seo-user-page',
];
const supportedLngs = ['pt-br', 'en'];

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  debug: false,
  interpolation: {
    escapeValue: false,
  },
  defaultNS: 'common',
  ns,
  supportedLngs,
  react: {
    useSuspense: false,
  },
  resources: {
    en: {},
    'pt-br': {},
    pt: {},
  },
});

const Wrapper: React.FC = ({ children }) => {
  return (
    <Provider store={store}>
      <QueryClientProvider>
        <I18nextProvider i18n={i18n}>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </I18nextProvider>
      </QueryClientProvider>
    </Provider>
  );
};

const render = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper' | 'store'>
) => {
  return defaultRender(ui, { wrapper: Wrapper, ...options });
};

const renderHook = <Result, Props>(
  render: (initialProps: Props) => Result,
  options?: Omit<RenderHookOptions<Props>, 'wrapper'>
): RenderHookResult<Result, Props> => {
  return defaultRendesHook(render, { wrapper: Wrapper, ...options });
};

const advanceTimersByTime = async (time: number) =>
  await act(async () => {
    jest.advanceTimersByTime(time);
  });

/* istanbul ignore next */
export * from '@testing-library/react';
export { render, renderHook, advanceTimersByTime };
