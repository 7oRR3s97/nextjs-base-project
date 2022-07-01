import React from 'react';
import { useTranslation } from 'next-i18next';

import Emoji from 'components/common-ui/Emoji';

import HomeCallOutImage from 'assets/isaac-newton.png';

import {
  Container,
  DataContainer,
  TitleContainer,
  Title,
  SubtitleContainer,
  Subtitle,
  ImageContainer,
  ImageComponent,
} from './styles';

const CallOut: React.FC = () => {
  const { t } = useTranslation('home-page-callout');
  return (
    <Container>
      <DataContainer>
        <TitleContainer>
          <Title variant="h1">
            {t('title')} <Emoji symbol="↣🍎" label="coin" />
          </Title>
        </TitleContainer>
        <SubtitleContainer>
          <Subtitle variant="h2">{t('subtitle')}</Subtitle>
        </SubtitleContainer>
      </DataContainer>
      <ImageContainer>
        <ImageComponent
          src={HomeCallOutImage}
          alt="callout-image"
          layout="fill"
          quality={100}
          priority
        />
      </ImageContainer>
    </Container>
  );
};

export default CallOut;
