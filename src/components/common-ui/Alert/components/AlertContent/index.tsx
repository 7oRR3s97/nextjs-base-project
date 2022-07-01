import React from 'react';
import Alert, { AlertColor } from '@mui/material/Alert';

import { ActionAlert } from './styles';

interface Props {
  severity: AlertColor;
  onClose(): void;
  action?: boolean;
  actionComponent?: React.ReactNode;
}

const AlertContent: React.FC<Props> = ({
  onClose,
  severity,
  action,
  actionComponent,
  children,
}) => {
  if (action)
    return (
      <ActionAlert severity={severity} action={actionComponent}>
        {children}
      </ActionAlert>
    );
  return (
    <Alert severity={severity} onClose={() => onClose()}>
      {children}
    </Alert>
  );
};

export default AlertContent;
