import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import IconImage from 'assets/logo.svg';

import { Container } from './styles';

const MobileLogo: React.FC = () => {
  const router = useRouter();
  return (
    <Container onClick={() => router.push('/')}>
      <Image
        src={IconImage}
        alt="kizi-logo"
        layout="fill"
        priority
        objectPosition="contain"
      />
    </Container>
  );
};

export default MobileLogo;
