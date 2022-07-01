import React from 'react';
import dynamic from 'next/dynamic';
import { NextPage, GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { AnimatePresence } from 'framer-motion';

import AppLoader from 'components/AppLoader';
import Head from 'components/Head';

const UserPage = dynamic(() => import('components/pages/User'));

const User: NextPage = () => {
  const [showAnimation, setShowAnimation] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setShowAnimation(false);
    }, 7000);
  }, []);

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {showAnimation && <AppLoader />}
      </AnimatePresence>
      <Head page="user" />
      {!showAnimation && <UserPage />}
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        'common',
        'login',
        'seo-user-page',
        'auth-alerts',
        'account-data',
        'edit-data',
        'menu',
        'user-page',
      ])),
    },
  };
};

export default User;
