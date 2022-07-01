import { styled, createTheme } from '@mui/material/styles';
import { deepmerge } from '@mui/utils';
import Box from '@mui/material/Box';

import theme from 'styles/theme';

export const LoaderContainer = styled(Box)(() => ({
  width: '100%',
  height: '100%',
  position: 'absolute',
  borderRadius: 'inherit',
  backgroundColor: 'inherit',
  display: 'grid',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const IconContainer = styled(Box)(({ theme }) => ({
  paddingRight: theme.spacing(1),
  display: 'flex',
  alignItems: 'center',
}));

const buttonTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.common.white,
          color: theme.palette.common.black,
        },
      },
      variants: [
        {
          props: { variant: 'link' },
          style: {
            textTransform: 'none',
            position: 'relative',
            minWidth: 'unset',
            padding: '8px 16px',
            backgroundColor: theme.palette.common.white,
            '&:hover': {
              backgroundColor: theme.palette.common.white,
              '@media (hover: none)': {
                backgroundColor: theme.palette.common.white,
              },
            },
            [theme.breakpoints.up('lg')]: {
              '&:hover': {
                color: theme.palette.primary.main,
              },
            },
          },
        },
        {
          props: { variant: 'underlined' },
          style: {
            textTransform: 'none',
            position: 'relative',
            background: 'none',
            fontWeight: 400,
            [theme.breakpoints.up('lg')]: {
              '&:hover': {
                '&:after': {
                  width: '95%',
                  position: 'absolute',
                  content: '""',
                  left: '3px',
                  bottom: 0,
                  height: '2px',
                  background: theme.palette.primary.main,
                },
              },
            },
          },
        },
        {
          props: { variant: 'selectedUnderlined' },
          style: {
            textTransform: 'none',
            position: 'relative',
            background: 'none',
            fontWeight: 400,
            '&:after': {
              width: '95%',
              position: 'absolute',
              content: '""',
              left: '3px',
              bottom: 0,
              height: '2px',
              background: theme.palette.primary.main,
            },
          },
        },
        {
          props: { variant: 'halfline' },
          style: {
            textTransform: 'none',
            position: 'relative',
            background: 'none',
            fontWeight: 400,
            marginBottom: '1em',
            maxWidth: 'max-content',
            '&:after': {
              width: '40px',
              position: 'absolute',
              content: '""',
              left: '7px',
              bottom: 0,
              height: '2px',
              opacity: 0.75,
              background: theme.palette.primary.main,
            },
            [theme.breakpoints.up('lg')]: {
              '&:hover': {
                backgroundColor: theme.palette.common.white,
                '&:after': {
                  width: 'calc(100% - 14px)',
                  position: 'absolute',
                  content: '""',
                  left: '7px',
                  bottom: 0,
                  height: '2px',
                  opacity: 0.75,
                  background: theme.palette.primary.main,
                },
              },
            },
          },
        },
        {
          props: { variant: 'outlined' },
          style: {
            border: `1px solid ${theme.palette.primary.main}`,
            borderRadius: 42,
            textTransform: 'none',
            lineHeight: 1.5,
            position: 'relative',
            height: '3em',
            letterSpacing: '0.1em',
            alignItems: 'center',
            backgroundColor: theme.palette.common.white,
            color: theme.palette.common.black,
            '&:hover': {
              backgroundColor: theme.palette.common.white,
              '@media (hover: none)': {
                backgroundColor: theme.palette.common.white,
              },
            },
            [theme.breakpoints.up('lg')]: {
              '&:hover': {
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.common.white,
              },
            },
          },
        },
        {
          props: { variant: 'outlinedBlack' },
          style: {
            border: `1px solid ${theme.palette.common.black}`,
            borderRadius: 42,
            textTransform: 'none',
            lineHeight: 1.5,
            position: 'relative',
            height: '3em',
            letterSpacing: '0.1em',
            alignItems: 'center',
            backgroundColor: theme.palette.common.white,
            color: theme.palette.common.black,
            padding: `0px ${theme.spacing(2)}px`,
            '&:hover': {
              backgroundColor: theme.palette.common.white,
              '@media (hover: none)': {
                backgroundColor: theme.palette.common.white,
              },
            },
            [theme.breakpoints.up('lg')]: {
              '&:hover': {
                filter: 'grayscale(15%)',
              },
            },
          },
        },
        {
          props: { variant: 'icon' },
          style: {
            textTransform: 'none',
            position: 'relative',
            display: 'flex',
            fontWeight: 500,
            letterSpacing: '0.06em',
            margin: 'unset',
            width: '100%',
            padding: '0 1em 3px 1em',
            borderRadius: 5,
            backgroundColor: theme.palette.gray[300],
            [theme.breakpoints.up('md')]: {
              width: '28em',
              maxWidth: '28em',
              height: '35px',
            },
            [theme.breakpoints.up('lg')]: {
              '&:hover': {
                color: theme.palette.primary.main,
                filter: 'grayscale(15%)',
              },
            },
            [theme.breakpoints.up('xxl')]: {
              height: '45px',
            },
          },
        },
        {
          props: { variant: 'iconUnderlined' },
          style: {
            textTransform: 'none',
            position: 'relative',
            display: 'flex',
            justifyContent: 'space-between',
            fontWeight: 500,
            letterSpacing: '0.06em',
            margin: 'unset',
            width: '100%',
            padding: '0 1em 3px 1em',
            borderRadius: 5,
            backgroundColor: theme.palette.gray[300],
            [theme.breakpoints.up('md')]: {
              width: '28em',
              maxWidth: '28em',
              height: '35px',
            },
            [theme.breakpoints.up('lg')]: {
              '&:hover': {
                color: theme.palette.primary.main,
                filter: 'grayscale(15%)',
              },
            },
            [theme.breakpoints.up('xxl')]: {
              height: '45px',
            },
          },
        },
        {
          props: { variant: 'box' },
          style: {
            textTransform: 'none',
            position: 'relative',
            height: '18em',
            width: '18em',
            backgroundColor: theme.palette.grey[300],
            borderRadius: '1em',
            margin: '1em',
            display: 'flex',
            textAlign: 'start',
            [theme.breakpoints.up('lg')]: {
              '&:hover': {
                color: theme.palette.primary.main,
                filter: 'grayscale(15%)',
              },
            },
          },
        },
        {
          props: { variant: 'filled' },
          style: {
            textTransform: 'none',
            position: 'relative',
            height: '3em',
            letterSpacing: '0.1em',
            fontWeight: 'bold',
            alignItems: 'center',
            borderRadius: 42,
            color: theme.palette.common.black,
            backgroundColor: theme.palette.primary.main,
            '&:hover': {
              backgroundColor: theme.palette.primary.main,
              '@media (hover: none)': {
                backgroundColor: theme.palette.primary.main,
              },
            },
            [theme.breakpoints.up('lg')]: {
              '&:hover': {
                filter: 'grayscale(15%)',
              },
            },
          },
        },
        {
          props: { variant: 'filledBlack' },
          style: {
            textTransform: 'none',
            position: 'relative',
            height: '3em',
            letterSpacing: '0.1em',
            fontWeight: 'bold',
            alignItems: 'center',
            borderRadius: 42,
            color: theme.palette.common.white,
            backgroundColor: theme.palette.common.black,
            '&:hover': {
              backgroundColor: theme.palette.common.black,
              '@media (hover: none)': {
                backgroundColor: theme.palette.common.black,
              },
            },
            [theme.breakpoints.up('lg')]: {
              '&:hover': {
                backgroundColor: theme.palette.common.black,
                filter: 'grayscale(15%)',
              },
            },
          },
        },
        {
          props: { variant: 'filledWhite' },
          style: {
            textTransform: 'none',
            height: '3em',
            letterSpacing: '0.1em',
            fontWeight: 'bold',
            alignItems: 'center',
            borderRadius: 42,
            border: `1px solid ${theme.palette.primary.main}`,
            backgroundColor: theme.palette.common.white,
            '&:hover': {
              backgroundColor: theme.palette.common.white,
              '@media (hover: none)': {
                backgroundColor: theme.palette.common.white,
              },
            },
            [theme.breakpoints.up('lg')]: {
              '&:hover': {
                filter: 'grayscale(10%)',
              },
            },
          },
        },
        {
          props: { variant: 'filledBoxShadowMain' },
          style: {
            textTransform: 'none',
            position: 'relative',
            color: theme.palette.common.white,
            backgroundColor: theme.palette.primary.main,
            height: '3em',
            letterSpacing: '0.1em',
            fontWeight: 'bold',
            borderRadius: 5,
            alignItems: 'center',
            boxShadow:
              'rgb(0 0 139 / 8%) 0px 3px 1px -2px, rgb(0 0 139 / 8%) 0px 2px 2px 0px, rgb(0 0 139 / 38%) 0px 1px 5px 0px',
            '&:hover': {
              backgroundColor: theme.palette.primary.main,
              filter: 'grayscale(15%)',
              boxShadow:
                'rgb(0 0 139 / 8%) 0px 3px 1px -2px, rgb(0 0 139 / 8%) 0px 2px 2px 0px, rgb(0 0 139 / 38%) 0px 1px 5px 0px',
            },
          },
        },
        {
          props: { variant: 'filledBoxShadowWhite' },
          style: {
            textTransform: 'none',
            position: 'relative',
            color: theme.palette.primary.main,
            backgroundColor: theme.palette.common.white,
            height: '3em',
            letterSpacing: '0.1em',
            fontWeight: 'bold',
            borderRadius: 5,
            alignItems: 'center',
            boxShadow:
              'rgb(0 0 139 / 8%) 0px 3px 1px -2px, rgb(0 0 139 / 8%) 0px 2px 2px 0px, rgb(0 0 139 / 38%) 0px 1px 5px 0px',
            [theme.breakpoints.up('lg')]: {
              '&:hover': {
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.common.white,
                filter: 'grayscale(15%)',
                boxShadow:
                  'rgb(0 0 139 / 8%) 0px 3px 1px -2px, rgb(0 0 139 / 8%) 0px 2px 2px 0px, rgb(0 0 139 / 38%) 0px 1px 5px 0px',
              },
            },
          },
        },
        {
          props: { variant: 'gradient' },
          style: {
            width: '70vw',
            height: '15vh',
            margin: '2vh',
            display: 'flex',
            flexDirection: 'column',
            borderRadius: 15,
            justifyContent: 'flex-end',
            alignItems: 'flex-start',
            padding: '0 15px',
            background:
              'linear-gradient(330.31deg, rgba(86, 39, 230, 0.14) -1.71%, rgba(47, 23, 121, 0.1) 74.54%)',

            [theme.breakpoints.up('md')]: {
              width: '100%',
              maxWidth: '29%',
              margin: 'unset',
            },
            [theme.breakpoints.up('lg')]: {
              '&:hover': {
                filter: 'unset',
                color: theme.palette.common.white,
                background:
                  'linear-gradient(330.31deg, rgba(85, 37, 231, 0.24) -1.71%, rgba(21, 101, 192, 0.6) 74.54%)',
              },
            },
          },
        },
        {
          props: { variant: 'footer' },
          style: {
            height: 48,
            minWidth: 48,
            justifyContent: 'flex-start',
            padding: '0.3em 0em',
            cursor: 'pointer',
            textTransform: 'none',
            fontWeight: 500,
            textAlign: 'start',
            [theme.breakpoints.up('lg')]: {
              '&:hover': {
                backgroundColor: 'transparent',
                color: theme.palette.primary.main,
              },
            },
          },
        },
        {
          props: { variant: 'quiz' },
          style: {
            textTransform: 'none',
            border: `3px solid ${theme.palette.common.white}`,
            padding: '3vh',
            height: 'fit-content',
            cursor: 'pointer',
            color: theme.palette.common.white,
            backgroundColor: theme.palette.primary.main,
            fontWeight: 'bold',
          },
        },
        {
          props: { variant: 'gray' },
          style: {
            textTransform: 'none',
            backgroundColor: theme.palette.gray[300],
            maxWidth: 'fit-content',
            height: 'fit-content',
            padding: 5,
            borderRadius: 5,
            boxShadow:
              '0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%)',
            [theme.breakpoints.up('lg')]: {
              '&:hover': {
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.common.white,
              },
            },
          },
        },
        {
          props: { variant: 'text' },
          style: {
            display: 'flex',
            textTransform: 'none',
            cursor: 'pointer',
            position: 'relative',
            '&:after': {
              position: 'absolute',
              content: '""',
              bottom: 0,
              left: '3%',
              width: '20%',
              background: theme.palette.common.black,
              height: 1,
              opacity: 0.6,
            },

            [theme.breakpoints.up('lg')]: {
              '&:hover': {
                '&:after': {
                  width: '94%',
                },
              },
            },
          },
        },
        {
          props: { variant: 'grayOutlined' },
          style: {
            border: `1px solid ${theme.palette.grey[400]}`,
            borderRadius: 5,
            height: 'unset',
            fontStyle: 'normal',
            lineHeight: '16px',
            textAlign: 'center',
            padding: '0.6em 0.7em',
            alignItems: 'center',
            textTransform: 'none',
            position: 'relative',
            [theme.breakpoints.up('lg')]: {
              '&:hover': {
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.common.white,
              },
            },
          },
        },
        {
          props: { variant: 'squareUpDown' },
          style: {
            textTransform: 'none',
            margin: '3px 0',
            padding: 'unset',
            minWidth: 30,
            height: 30,
            borderRadius: 5,
            border: `1px solid ${theme.palette.grey[400]}`,
            color: theme.palette.primary.main,
          },
        },
        {
          props: { variant: 'alert' },
          style: {
            textTransform: 'none',
            position: 'relative',
            fontFamily: 'Montserrat, Roboto, sans-serif',
            color: 'inherit',
            fontWeight: 'bold',
            minWidth: 'unset',
            padding: '8px 16px',
            backgroundColor: 'inherit',
            maxWidth: 200,
            alignSelf: 'center',
            '&.MuiTypography-root': {
              fontSize: 'inherit',
            },
            [theme.breakpoints.up('lg')]: {
              '&:hover': {
                backgroundColor: 'transparent',
                color: 'inherit',
                opacity: 0.8,
              },
            },
          },
        },
      ],
    },
  },
});

export default createTheme(deepmerge(buttonTheme, theme));
