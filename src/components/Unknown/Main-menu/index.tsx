import React, { FC } from 'react';
import {
  AppBar,
  Box,
  CssBaseline,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import MenuIcon from '@mui/icons-material/Menu';
import UserAuthMenu from '../User-auth-menu';

export const useStyles = makeStyles({
  toolBar: { display: 'flex', alignItems: 'center' },
  content: {
    width: '100%',
    padding: '0 0.3%',
    transition: '.2s',
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
});

const MainMenu: FC = ({ children }) => {
  const classes = useStyles();

  return (
    <Box display="flex" overflow="hidden">
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar variant="dense" className={classes.toolBar}>
          <IconButton
            size="small"
            color="inherit"
            sx={{
              mr: 2,
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Voypost
          </Typography>
          <UserAuthMenu />
        </Toolbar>
      </AppBar>
      <Box
        component="main"
        className={classes.content}
        sx={{
          mt: '50px',
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default MainMenu;
