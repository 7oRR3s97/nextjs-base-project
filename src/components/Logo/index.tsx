import React from 'react';

import DesktopLogo from './components/DesktopLogo';
import MobileLogo from './components/MobileLogo';

import { Container } from './styles';

const Logo: React.FC = () => {
  return (
    <Container>
      <DesktopLogo />
      <MobileLogo />
    </Container>
  );
};

export default Logo;
