import { SimplePaletteColorOptions } from '@mui/material';
import { ButtonPropsVariantOverrides } from '@mui/material/Button';
import { OverridableStringUnion } from '@mui/types';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    light: true;
  }
}

declare module '@mui/material/styles' {
  interface Palette {
    light: SimplePaletteColorOptions;
    border: SimplePaletteColorOptions;
    icon: SimplePaletteColorOptions;
  }
  interface PaletteOptions {
    light: SimplePaletteColorOptions;
    border: SimplePaletteColorOptions;
    icon: SimplePaletteColorOptions;
  }
}
