// src/theme.js
import { PaletteColorOptions, createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    light: PaletteColorOptions;
  }
  interface PaletteOptions {
    light: PaletteColorOptions;
  }
}

const { palette } = createTheme();

const theme = createTheme({
  palette: {
    primary: {
      main: '#1276FF',
      light: '#D6E7FF',
      contrastText: '#fff'
    },
    secondary: {
      main: '#1B2D4F',
      contrastText: '#fff'
    },
    background: {
      default: '#F4F5FC'
    },
    light: palette.augmentColor({
      color: {
        main: '#FFFFFF',
        dark: ''
      }
    })
  },
  typography: {
    fontFamily: '"Manrope", sans-serif',
    button: {
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: 20
    },
    body1: {
      fontSize: '0.875rem',
      fontWeight: 700,
      lineHeight: 19.12
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: 19.12
    }
  }
});

export default theme;
