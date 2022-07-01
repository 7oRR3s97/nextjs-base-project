import React from 'react';
import { AlertColor } from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import type { DialogProps } from '@mui/material/Dialog';

import Collapse from 'components/common-ui/Collapse';
import AlertContent from './components/AlertContent';

import { DialogContainer } from './styles';

interface Props extends DialogProps {
  open: boolean;
  severity: AlertColor;
  onClose(): void;
  title: string;
  message?: string;
  action?: boolean;
  actionComponent?: React.ReactNode;
  progress?: number;
}

const Alert: React.FC<Props> = ({
  open,
  severity,
  onClose,
  title,
  message,
  action,
  actionComponent,
  progress,
  ...props
}) => {
  const [timeOutId, setTimeOutId] = React.useState<
    NodeJS.Timeout | undefined
  >();

  const progressTimeOut = () => {
    if (!progress || !onClose) return;
    return setTimeOutId(
      setTimeout(() => {
        onClose();
      }, progress)
    );
  };

  const handleClose = () => {
    if (timeOutId) {
      clearTimeout(timeOutId);
    }
    onClose();
  };

  return (
    <DialogContainer
      {...props}
      open={open}
      TransitionComponent={Collapse}
      TransitionProps={{
        in: open,
        onEntered: progressTimeOut,
        timeout: 300,
      }}
      onClose={handleClose}
      hideBackdrop
      disableAutoFocus
      disableEnforceFocus
    >
      <AlertContent
        severity={severity}
        onClose={handleClose}
        action={action}
        actionComponent={actionComponent}
      >
        <AlertTitle>{title}</AlertTitle>
        {message}
      </AlertContent>
    </DialogContainer>
  );
};

export default Alert;
