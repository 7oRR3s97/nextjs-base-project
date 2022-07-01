import React from 'react';
import dynamic from 'next/dynamic';
// import { useRouter } from 'next/router';

import DefaultLayout from 'components/Layouts/default';

import { Container } from './styles';

const Body = dynamic(() => import('./components/Body'));

const UserPage: React.FC = () => {
  // const router = useRouter();

  // React.useEffect(() => {
  //   if (!isAuthenticated && router.isReady) router.push('/');
  // }, [isAuthenticated, router]);

  return (
    <DefaultLayout>
      <Container>
        <Body />
      </Container>
    </DefaultLayout>
  );
};

export default UserPage;
