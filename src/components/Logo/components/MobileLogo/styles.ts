import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const Container = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '100%',
  display: 'flex',
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));
