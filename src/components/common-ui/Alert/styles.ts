import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';

export const DialogContainer = styled(Dialog)(({ theme }) => ({
  left: 'unset',
  top: 'unset',
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(4),
  },
  '.MuiDialog-paper': {
    margin: 'unset',
    maxHeight: 'unset',
  },
}));
