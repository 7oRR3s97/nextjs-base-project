import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Close from '@mui/icons-material/Close';
import ArrowBack from '@mui/icons-material/ArrowBack';
import Box from '@mui/material/Box';

export const Container = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4, 6),
}));

export const CloseIcon = styled(Close)(({ theme }) => ({
  cursor: 'pointer',
  position: 'absolute',
  right: 10,
  top: 10,
  zIndex: 2,
  padding: 'unset',
  color: theme.palette.common.black,
}));

export const Title = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontFamily: 'Mulish',
  textAlign: 'center',
  color: theme.palette.common.black,
}));

export const Subtitle = styled(Typography)(({ theme }) => ({
  fontFamily: 'Mulish',
  color: theme.palette.common.black,
  textAlign: 'center',
  paddingTop: theme.spacing(3),
}));

export const BackIcon = styled(ArrowBack)(({ theme }) => ({
  cursor: 'pointer',
  position: 'absolute',
  left: '5%',
  top: 20,
  zIndex: 2,
  padding: 'unset',
  color: theme.palette.common.black,
}));
