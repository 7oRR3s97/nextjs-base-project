import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

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
});

supportedLngs.forEach((lang) => {
  ns.forEach((n) => {
    i18n.addResourceBundle(
      lang,
      n,
      require(`../public/locales/${lang}/${n}.json`)
    );
  });
});

export default i18n;
