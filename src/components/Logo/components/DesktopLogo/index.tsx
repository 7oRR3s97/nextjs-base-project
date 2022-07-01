import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import LogoImage from 'assets/logo.svg';

import { Container } from './styles';

const DesktopLogo: React.FC = () => {
  const router = useRouter();
  return (
    <Container onClick={() => router.push('/')}>
      <Image
        src={LogoImage}
        alt="kizi-logo"
        layout="fill"
        priority
        objectPosition="contain"
      />
    </Container>
  );
};

export default DesktopLogo;
