import {
  createTheme,
  ThemeOptions,
  responsiveFontSizes,
} from '@mui/material/styles';
import { ptBR, enUS } from '@mui/material/locale';

const themeData: ThemeOptions = {
  palette: {
    common: {
      black: '#2A2B2F',
      white: '#FFFFFF',
    },
    primary: {
      main: '#3D4ED7',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: '#D41D5F',
      dark: '#A30D11',
      light: '#FBE7E8',
    },
    warning: {
      main: '#FFD340',
      dark: '#CD6200',
      light: '#FEF2E5',
    },
    success: {
      main: '#00D756',
      dark: '#1F9254',
      light: '#EBF9F1',
    },
    gray: {
      700: '#808080',
      500: '#8F92A1',
      300: '#F4F4F4',
      200: 'rgba(0, 0, 0, 0.2)',
      100: 'rgba(0, 0, 0, 0.15)',
      50: 'linear-gradient(308.85deg, rgba(196, 196, 196, 0.19) -1.71%, rgba(47, 23, 121, 0.1) 74.54%)',
    },
  },
  typography: {
    fontFamily: ['Montserrat', 'Roboto', 'sans-serif'].join(','),
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 500,
    fontWeightBold: 'bold',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      xm: 960,
      lg: 1120,
      xl: 1168,
      xxl: 1440,
    },
  },
  spacing: 4,
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        disableRipple: true,
        disableTouchRipple: true,
        disableFocusRipple: true,
      },
      styleOverrides: {
        root: {
          fontFamily: ['Mulish', 'Roboto', 'sans-serif'].join(','),
          '&:hover': {
            backgroundColor: 'transparent',
            '@media (hover: none)': {
              backgroundColor: 'transparent',
            },
          },
          '&.Mui-disabled': {
            color: 'inherit',
          },
        },
      },
    },
    MuiIconButton: {
      defaultProps: {
        disableRipple: true,
        disableTouchRipple: true,
        disableFocusRipple: true,
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
          '&:hover': {
            backgroundColor: 'transparent',
            '@media (hover: none)': {
              backgroundColor: 'inherit',
            },
          },
          '&.Mui-disabled': {
            color: 'inherit',
          },
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        standardSuccess: {
          color: 'rgba(14, 84, 40, 0.9)',
          backgroundColor: 'rgba(37, 211, 102, 0.25)',
        },
        standardError: {
          color: 'rgb(88, 29, 50)',
          backgroundColor: 'rgb(251, 236, 242)',
        },
        icon: {
          color: 'inherit !important',
        },
        message: {
          maxWidth: 320,
        },
      },
    },
    MuiAlertTitle: {
      styleOverrides: {
        root: {
          fontWeight: 'bold',
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        '@global': {
          html: {
            height: '100%',
          },
          body: {
            height: '100%',
          },
          '#__next': {
            height: '100%',
          },
        },
      },
    },
  },
};

const getLocale = (locale?: string) => {
  if (!locale) return ptBR;
  if (locale === 'en') return enUS;
  return ptBR;
};

export const getLocalizedTheme = (locale?: string) => {
  return responsiveFontSizes(
    createTheme(themeData, getLocale(locale?.toLowerCase())),
    {
      breakpoints: ['xs', 'sm', 'md', 'xm', 'lg', 'xl', 'xxl'],
    }
  );
};

const theme = responsiveFontSizes(createTheme(themeData), {
  breakpoints: ['xs', 'sm', 'md', 'xm', 'lg', 'xl', 'xxl'],
});

export default theme;
