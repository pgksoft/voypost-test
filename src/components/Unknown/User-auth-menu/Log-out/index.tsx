import React, { FC, useContext } from 'react';
import firebase from 'firebase';
import { Button } from '@mui/material';
import { UIContext } from '../../UIContext';
import clearFirestoreCache from '../../../../common/clearFirestoreCache';

type TLogoutProps = {
  handleClose: () => void;
};

const Logout: FC<TLogoutProps> = ({ handleClose }) => {
  const { setAlert } = useContext(UIContext);

  const handleClick = () => {
    handleClose();
    firebase
      .auth()
      .signOut()
      .then(() => {
        clearFirestoreCache();
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
