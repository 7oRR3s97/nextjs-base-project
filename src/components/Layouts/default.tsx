import React from 'react';
import dynamic from 'next/dynamic';

import { Container, Body, Wrapper } from './styles';

const NavBar = dynamic(() => import('components/NavBar'));

const DefaultLayout: React.FC = ({ children }) => {
  return (
    <Container>
      <NavBar />
      <Body>
        <Wrapper>{children}</Wrapper>
      </Body>
    </Container>
  );
};

export default DefaultLayout;
