import React from 'react';
import Link from 'next/link';
import { ThemeProvider } from '@mui/material/styles';

import MuiButton, { ButtonProps } from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

import { Variant } from '@mui/material/styles/createTypography';

import theme, { LoaderContainer, IconContainer } from './styles';

export type Layout =
  | 'link'
  | 'underlined'
  | 'selectedUnderlined'
  | 'halfline'
  | 'outlined'
  | 'outlinedBlack'
  | 'icon'
  | 'iconUnderlined'
  | 'box'
  | 'filled'
  | 'filledBlack'
  | 'filledWhite'
  | 'filledBoxShadowMain'
  | 'filledBoxShadowWhite'
  | 'gradient'
  | 'footer'
  | 'quiz'
  | 'text'
  | 'gray'
  | 'grayOutlined'
  | 'squareUpDown'
  | 'alert';

export interface Props extends ButtonProps {
  href?: string;
  newWindow?: boolean;
  isLoading?: boolean;
  layout?: Layout;
  variantText?: Variant;
  icon?: JSX.Element;
  fullWidth?: boolean;
}

const Button: React.FC<Props> = ({
  children,
  href,
  newWindow,
  isLoading,
  layout = 'link',
  disabled,
  className,
  variantText = 'body1',
  icon,
  fullWidth,
  ...props
}) => {
  const loader = React.useMemo(() => {
    if (!isLoading) return null;
    return (
      <LoaderContainer>
        <CircularProgress
          color="inherit"
          size={theme.typography[variantText].fontSize}
        />
      </LoaderContainer>
    );
  }, [isLoading, variantText]);

  const iconComponent = React.useMemo(() => {
    if (!icon) return null;
    return <IconContainer>{icon}</IconContainer>;
  }, [icon]);

  const buttonContent = React.useMemo(() => {
    return (
      <MuiButton
        variant={layout}
        disabled={disabled || isLoading}
        fullWidth={fullWidth}
        {...props}
      >
        {loader}
        {iconComponent}
        <Typography
          variant={variantText}
          sx={{
            fontFamily: 'inherit',
            fontWeight: 'inherit',
          }}
        >
          {children}
        </Typography>
      </MuiButton>
    );
  }, [
    children,
    disabled,
    isLoading,
    layout,
    fullWidth,
    loader,
    props,
    variantText,
    iconComponent,
  ]);

  const button = React.useMemo(() => {
    if (href) {
      if (newWindow) {
        return (
          <a
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: 'none' }}
            href={href}
          >
            {buttonContent}
          </a>
        );
      }
      return <Link href={href}>{buttonContent}</Link>;
    }
    return buttonContent;
  }, [buttonContent, href, newWindow]);

  return <ThemeProvider theme={theme}>{button}</ThemeProvider>;
};

export default Button;
