import { createTheme } from '@mui/material';
import { TypographyOptions } from '@mui/material/styles/createTypography';

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    h5Bold: true;
  }
}

interface ExtendedTypographyOptions extends TypographyOptions {
  h5Bold: React.CSSProperties;
}

const defaultTheme = createTheme({});

const theme = createTheme(defaultTheme, {
  palette: {
    primary: {
      light: 'rgb(252, 80, 150)',
      main: 'rgb(252, 32, 100)',
    },
    info: { main: '#000' },
  },
  typography: {
    h5Bold: {
      ...defaultTheme.typography.h5,
      fontWeight: 'bold',
    },
  } as ExtendedTypographyOptions,
});

export default theme;
