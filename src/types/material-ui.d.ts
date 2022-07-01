import { PaletteOptions } from '@material-ui/core/styles/createPalette';

declare module '@mui/material/styles' {
  interface Palette {
    gray: Palette['grey'];
  }
  interface PaletteOptions {
    gray: PaletteOptions['grey'];
  }
}
//

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    xm: true;
    lg: true;
    xl: true;
    xxl: true;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    link: true;
    underlined: true;
    selectedUnderlined: true;
    halfline: true;
    outlined: true;
    outlinedBlack: true;
    icon: true;
    iconUnderlined: true;
    box: true;
    filled: true;
    filledBlack: true;
    filledWhite: true;
    filledBoxShadowMain: true;
    filledBoxShadowWhite: true;
    gradient: true;
    footer: true;
    quiz: true;
    text: true;
    gray: true;
    grayOutlined: true;
    squareUpDown: true;
    alert: true;
  }
}
