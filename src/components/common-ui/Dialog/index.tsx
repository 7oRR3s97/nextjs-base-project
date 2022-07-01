import React from 'react';

import type { DialogProps } from '@mui/material/Dialog';

import DialogTitle from './components/DialogTitle';
import { DialogContainer, Container, DataContainer } from './styles';

interface Props extends DialogProps {
  open: boolean;
  onClose(): void;
  dialogTitle?: boolean;
  title?: string;
  subtitle?: string;
  backButton?: boolean;
  handleBack?: () => void;
  storybook?: boolean;
}

const Dialog: React.FC<Props> = ({
  open,
  onClose,
  dialogTitle,
  title,
  subtitle,
  backButton,
  handleBack,
  children,
  storybook,
  ...props
}) => {
  const sx = storybook ? { position: 'unset' } : props.sx;
  const disablePortal = storybook ? true : props.disablePortal;
  return (
    <DialogContainer
      {...props}
      disablePortal={disablePortal}
      sx={sx}
      open={open}
      onClose={onClose}
    >
      <Container>
        {dialogTitle ? (
          <DialogTitle
            title={title}
            subtitle={subtitle}
            onClose={onClose}
            backButton={backButton}
            handleBack={handleBack}
          />
        ) : null}
        <DataContainer>{children}</DataContainer>
      </Container>
    </DialogContainer>
  );
};

export default Dialog;
