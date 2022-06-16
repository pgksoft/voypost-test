import React, { FC, useEffect, useState } from 'react';
import { useUser } from 'reactfire';
import { IconButton, Menu, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Logout from './Log-out';
import getUserLetters from './Log-out/util/get-user-letters';

export const useStyleIconButton = makeStyles({
  iconButton: {
    '&.MuiIconButton-root': {
      boxSizing: 'border-box',
      color: '#fff',
      fontWeight: 'bold',
      backgroundColor: 'rgb(180,180,180)',
      width: '36px',
      height: '36px',
    },
    '&.MuiIconButton-root:hover': {
      backgroundColor: 'rgb(150,150,150)',
    },
  },
});

const UserAuthMenu: FC = () => {
  const classes = useStyleIconButton();
  const { data: user } = useUser();

  const [userLetters, setUserLetters] = useState('U');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (user && user.displayName) {
      setUserLetters(getUserLetters(user.displayName));
    }
  }, [user]);

  return (
    <>
      <IconButton onClick={handleMenu} className={classes.iconButton}>
        <Typography variant="body1">{userLetters}</Typography>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={open}
        onClose={handleClose}
      >
        <Logout handleClose={handleClose} />
      </Menu>
    </>
  );
};

export default UserAuthMenu;
