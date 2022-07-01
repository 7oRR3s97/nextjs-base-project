import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import MenuIcon from '@mui/icons-material/Menu';

export const Container = styled(Box)(({ theme }) => ({
  width: '100%',
  position: 'sticky',
  backgroundColor: theme.palette.common.white,
  zIndex: 99,
  display: 'flex',
  top: 0,
  padding: theme.spacing(1, 2),
  height: 115,
}));

export const GridContainer = styled(Grid)(() => ({
  alignItems: 'center',
  justifyContent: 'space-between',
}));

export const GridLogo = styled(Grid)(({ theme }) => ({
  width: 90,
  height: 90,
  cursor: 'pointer',
  [theme.breakpoints.up('md')]: {
    width: 215,
  },
}));

export const GridItem = styled(Grid)(({ theme }) => ({
  width: 'fit-content',
  display: 'none',
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

export const MenuButtonGrid = styled(Grid)(({ theme }) => ({
  display: 'flex',
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));

export const MenuButton = styled(MenuIcon)(() => ({
  width: 45,
  height: 45,
}));
