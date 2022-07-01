import React from 'react';
import type { ChipProps } from '@mui/material/Chip';

import { ChipComponent } from './styles';

interface Props extends ChipProps {
  label?: string;
  success?: boolean;
  error?: boolean;
  warning?: boolean;
}

const Chip: React.FC<Props> = ({
  label,
  success,
  error,
  warning,
  ...props
}) => {
  const color = React.useMemo(() => {
    if (error) return 'error';
    if (warning) return 'warning';
    if (success) return 'success';
    return 'primary';
  }, [error, warning, success]);

  return <ChipComponent {...props} label={label} color={color} />;
};

export default Chip;
