import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

export const Container = styled(Box)(({ theme }) => ({
  width: '100%',
  backgroundColor: theme.palette.common.white,
  padding: theme.spacing(1, 2),
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(6),
  },
}));

export const DataContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.up('md')]: {
    width: '60%',
  },
}));

export const TitleContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4, 0, 8),
}));

export const Title = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  fontSize: '2.15rem !important',
  [theme.breakpoints.up('sm')]: {
    fontSize: '2.3rem !important',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.59rem !important',
  },
  [theme.breakpoints.up('xm')]: {
    fontSize: '2.3rem !important',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '2.72rem !important',
  },
  [theme.breakpoints.up('xl')]: {
    fontSize: '2.85rem !important',
  },
  [theme.breakpoints.up('xxl')]: {
    fontSize: '3.5rem !important',
  },
}));

export const SubtitleContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0, 12),
}));

export const Subtitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.24rem !important',
  [theme.breakpoints.up('sm')]: {
    fontSize: '1.7rem !important',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.53rem !important',
  },
  [theme.breakpoints.up('xm')]: {
    fontSize: '1.7rem !important',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '2.01rem !important',
  },
  [theme.breakpoints.up('xl')]: {
    fontSize: '2.1rem !important',
  },
  [theme.breakpoints.up('xxl')]: {
    fontSize: '2.5rem !important',
  },
}));

export const ImageContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: 711,
  margin: theme.spacing(8, 0),
  [theme.breakpoints.up('md')]: {
    margin: 'unset',
    width: '30%',
    height: 'initial',
  },
}));

export const ImageComponent = styled(Image)(({ theme }) => ({
  objectFit: 'contain',
  objectPosition: 'center',
  [theme.breakpoints.up('md')]: {
    objectPosition: 'right',
  },
}));
