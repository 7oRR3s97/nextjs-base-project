import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const Container = styled(Box)(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(2, 0, 3),
}));
