import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';

export const Container = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  padding: theme.spacing(8, 0, 4),
}));

export const PaginationComponent = styled(Pagination)(() => ({
  '&& .MuiPagination-ul': {
    flexWrap: 'nowrap',
  },
}));

export const Item = styled(PaginationItem)(({ theme }) => ({
  color: theme.palette.common.black,
  '&.Mui-selected': {
    color: theme.palette.common.black,
    backgroundColor: theme.palette.primary.main,
    '&.Mui-disabled': {
      color: theme.palette.common.black,
      backgroundColor: theme.palette.primary.main,
    },
  },
}));
