import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const Container = styled(Box)(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(0, 8),
    borderLeft: `1px solid ${theme.palette.gray[100]}`,
    height: 'calc(100vh - 115px)',
    display: 'grid',
    gridTemplateRows: 'min-content auto 0',
  },
}));
