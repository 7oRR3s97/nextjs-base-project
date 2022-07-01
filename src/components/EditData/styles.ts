import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import FormGroup from '@mui/material/FormGroup';

export const ButtonContainer = styled(Box)(() => ({
  width: '100%',
}));

export const Separator = styled(Box)(({ theme }) => ({
  width: '100%',
  borderBottom: `1px solid ${theme.palette.gray[500]}`,
}));

export const CheckboxGroup = styled(FormGroup)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  justifyContent: 'center',
  paddingBottom: theme.spacing(3),
  [theme.breakpoints.up('sm')]: {
    justifyContent: 'space-between',
  },
}));
