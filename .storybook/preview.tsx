import React from 'react';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import kiziTheme from './isaac';
import i18n from './i18next';
import { I18nextProvider } from 'react-i18next';
import QueryClientProvider from 'components/Providers/queryClientProvider';
import { Provider } from 'react-redux';

import { store } from './store';

import { ThemeProvider } from '@mui/material/styles';
import theme from '../src/styles/theme';

export const decorators = [
  (Story: any) => (
    <Provider store={store}>
      <QueryClientProvider>
        <I18nextProvider i18n={i18n}>
          <ThemeProvider theme={theme}>
            <Story />
          </ThemeProvider>
        </I18nextProvider>
      </QueryClientProvider>
    </Provider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
  docs: {
    theme: kiziTheme,
  },
  i18n,
  locale: 'pt-br',
  locales: {
    en: 'English',
    pt: 'Potuguês (Portugal)',
    pt_BR: 'Português (Brasil)',
  },
};
