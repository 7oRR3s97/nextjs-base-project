import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const Container = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  padding: theme.spacing(0, 4),
  maxWidth: 1440,
  margin: 'auto',
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(0, 8),
  },
}));

export const Wrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  backgroundColor: theme.palette.common.white,
  touchAction: 'pan-x pan-y',
  width: '100%',
}));

export const Body = styled(Box)(({ theme }) => ({
  display: 'flex',
  flex: 'auto',
  height: 'calc(100% - 115px)',
  minHeight: 'calc(100vh - 115px)',

  '&::-webkit-scrollbar': {
    background: 'transparent',
    height: theme.spacing(2),
    width: theme.spacing(2),
    '&-thumb': {
      background: theme.palette.primary.main,
      borderRadius: theme.spacing(3),
    },
  },
}));
