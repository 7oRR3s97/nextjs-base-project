import React from 'react';

import { Container, CloseIcon, BackIcon, Title, Subtitle } from './styles';

interface Props {
  onClose(): void;
  title?: string;
  subtitle?: string;
  backButton?: boolean;
  handleBack?: () => void;
}

const DialogTitle: React.FC<Props> = ({
  title,
  subtitle,
  onClose,
  backButton,
  handleBack,
}) => {
  return (
    <Container>
      <CloseIcon onClick={onClose} />
      {!!backButton ? <BackIcon onClick={handleBack} /> : null}
      {!!title ? <Title variant="h5">{title}</Title> : null}
      {!!subtitle ? <Subtitle variant="h6">{subtitle}</Subtitle> : null}
    </Container>
  );
};

export default DialogTitle;
