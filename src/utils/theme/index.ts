// src/theme.js
import { createTheme } from '@mui/material/styles';
import { MuiAppBar } from './AppBarTheme';
import { MuiButton } from './ButtonTheme';
import { MuiListItemButton } from './ListTheme/ListItemButtonTheme';
import { MuiListItemText } from './ListTheme/ListItemText';

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
    neutral: {
      main: '#FFFFFF',
      dark: '#F6F5FB',
      light: '#DCE2F0'
    },
    border: {
      main: '#E9EAED'
    },
    icon: {
      main: '#606B81'
    }
  },
  typography: {
    fontFamily: '"Manrope", sans-serif',
    h6: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
      lineHeight: '1.25 rem'
    },
    button: {
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: '1.25 rem',
      textTransform: 'capitalize'
    },
    body1: {
      fontSize: '0.875rem',
      fontWeight: 700,
      lineHeight: '1.25 rem'
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: '1.25 rem'
    },
    caption: {
      fontSize: '0.75rem',
      lineHeight: '1.125rem',
      fontWeight: 600
    }
  },
  components: {
    MuiAppBar: MuiAppBar,
    MuiButton: {
      ...MuiButton,
      variants: [
        {
          props: { variant: 'light', color: 'primary' },
          style: {
            backgroundColor: '#D6E7FF',
            color: '#1276FF'
          }
        },
        {
          props: { variant: 'contained', color: 'neutral' },
          style: {
            border: '1px solid #E9EAED',
            color: '#1B2D4F'
          }
        },
        {
          props: { variant: 'icon', color: 'neutral' },
          style: {
            backgroundColor: '#FFF',
            color: '#1276FF',
            border: '1px solid #E9EAED',
            height: '2rem',
            width: '2rem',
            minWidth: '2rem'
          }
        }
      ]
    },
    MuiListItemButton: MuiListItemButton,
    MuiListItemText: MuiListItemText
  }
});

export default theme;
