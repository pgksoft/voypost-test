import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom';
import theme from '../../../common/theme';
import Root from '../Root';
import { UIContextProvider } from '../UIContext';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router basename={process.env.PUBLIC_URL || '/'}>
        <CssBaseline />
        <UIContextProvider>
          <Root />
        </UIContextProvider>
      </Router>
    </ThemeProvider>
  );
};

export default App;
