import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';

export const DialogContainer = styled(Dialog)(({ theme }) => ({
  borderRadius: theme.spacing(3),
  '& .MuiPaper-root': {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: theme.spacing(3),
    width: '90%',
    overflow: 'hidden',
    [theme.breakpoints.up('sm')]: {
      width: '80%',
      maxWidth: 500,
    },
    [theme.breakpoints.up('md')]: {
      width: '50%',
    },
  },
}));

export const Container = styled(Box)(({ theme }) => ({
  padding: theme.spacing(7),
  width: 'fill-available',
  overflowY: 'scroll',

  '&::-webkit-scrollbar': {
    background: 'transparent',
    height: '0',
    width: theme.spacing(2),
    '&-thumb': {
      background: theme.palette.primary.main,
      borderRadius: theme.spacing(3),
    },
  },
}));

export const DataContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(0, 4, 4),
  display: 'grid',
  justifyItems: 'center',
}));
