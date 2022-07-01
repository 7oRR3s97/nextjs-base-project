import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';

export const ChipComponent = styled(Chip)(({ theme }) => ({
  '&.MuiChip-colorSuccess': {
    color: theme.palette.success.dark,
    backgroundColor: theme.palette.success.light,
  },
  '&.MuiChip-colorWarning': {
    color: theme.palette.warning.dark,
    backgroundColor: theme.palette.warning.light,
  },
  '&.MuiChip-colorError': {
    color: theme.palette.error.dark,
    backgroundColor: theme.palette.error.light,
  },
}));
