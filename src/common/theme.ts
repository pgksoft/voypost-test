import { createTheme } from '@mui/material';

const defaultTheme = createTheme({
  palette: {
    primary: {
      light: 'rgb(252, 80, 150)',
      main: 'rgb(252, 32, 100)',
    },
    info: { main: '#000' },
  },
});

export default defaultTheme;
