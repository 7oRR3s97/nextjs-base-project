import { styled } from '@mui/material/styles';
import TableContainer from '@mui/material/TableContainer';
import TableCell from '@mui/material/TableCell';

export const Container = styled(TableContainer)(({ theme }) => ({
  width: '100%',
  height: '100%',
  overflow: 'auto',
  backgroundColor: theme.palette.common.white,
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

export const HeaderCell = styled(TableCell)(() => ({
  fontWeight: 700,
  fontFamily: 'Mulish',
  fontSize: 'inherit',
}));
