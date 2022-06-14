import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom';
import { useUser } from 'reactfire';
import theme from '../../../common/theme';
import Root from '../Root';
import { UIContextProvider } from '../UIContext';
import MainMenu from '../Main-menu';
import { RouteContextProvider } from '../Route-context';

const App: React.FC = () => {
  const { data: user } = useUser();
  return (
    <ThemeProvider theme={theme}>
      <Router basename={process.env.PUBLIC_URL || '/'}>
        <CssBaseline />
        <RouteContextProvider>
          <UIContextProvider>
            {!user && <Root />}
            {user && (
              <MainMenu>
                <Root />
              </MainMenu>
            )}
          </UIContextProvider>
        </RouteContextProvider>
      </Router>
    </ThemeProvider>
  );
};

export default App;
