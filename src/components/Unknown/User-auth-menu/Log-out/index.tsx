import React, { FC, useContext } from 'react';
import firebase from 'firebase';
import { useHistory } from 'react-router-dom';
import { Button } from '@mui/material';
import { UIContext } from '../../UIContext';
import login from '../../Root/const/links';

type TLogoutProps = {
  handleClose: () => void;
};

const Logout: FC<TLogoutProps> = ({ handleClose }) => {
  const { setAlert } = useContext(UIContext);
  const history = useHistory();

  const handleClick = () => {
    handleClose();
    firebase
      .auth()
      .signOut()
      .then(() => {
        history.push(login.url);
      })
      .catch((error) => {
        const { message } = error;
        setAlert({
          show: true,
          severity: 'error',
          message: `Error logout${(message && `: ${message}`) || ''}`,
        });
      });
  };

  return (
    <Button color="inherit" onClick={handleClick}>
      Logout
    </Button>
  );
};

export default Logout;
