import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Head from 'components/Head';
import HomePage from 'components/pages/Home';

const Home: NextPage = () => {
  return (
    <>
      <Head />
      <HomePage />
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        'common',
        'login',
        'seo-home-page',
        'user-menu',
        'home-page-callout',
      ])),
    },
  };
};

export default Home;
