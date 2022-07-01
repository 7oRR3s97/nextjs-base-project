import React from 'react';

import DefaultLayout from 'components/Layouts/default';
import CallOut from './components/CallOut';

import { Container } from './styles';

const HomePage: React.FC = () => {
  return (
    <DefaultLayout>
      <Container>
        <CallOut />
      </Container>
    </DefaultLayout>
  );
};

export default HomePage;
