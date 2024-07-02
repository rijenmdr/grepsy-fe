import { SimplePaletteColorOptions } from '@mui/material';
import { ButtonPropsVariantOverrides } from '@mui/material/Button';
import { OverridableStringUnion } from '@mui/types';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    light: true;
    icon: true;
  }
  interface ButtonPropsColorOverrides {
    neutral: true;
  }
}

declare module '@mui/material/styles' {
  interface Palette {
    neutral: SimplePaletteColorOptions;
    border: SimplePaletteColorOptions;
    icon: SimplePaletteColorOptions;
  }
  interface PaletteOptions {
    neutral: SimplePaletteColorOptions;
    border: SimplePaletteColorOptions;
    icon: SimplePaletteColorOptions;
  }
}
