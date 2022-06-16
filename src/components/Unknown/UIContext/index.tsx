import React, { createContext, useState } from 'react';
import { Alert, AlertColor, Snackbar, Theme } from '@mui/material';
import { SxProps } from '@mui/system';

export const UIContext = createContext<UIContextProps>({} as UIContextProps);

interface UIContextProps {
  setAlert: React.Dispatch<React.SetStateAction<AlertProps>>;
}

interface AlertProps {
  show: boolean;
  severity?: AlertColor;
  message?: string;
  sx?: SxProps<Theme>;
}

export const UIContextProvider: React.FC = ({ children }) => {
  const [alert, setAlert] = useState<AlertProps>({
    show: false,
    severity: 'info',
    message: '',
  });
  const handleClose = () =>
    setAlert({
      show: false,
    });

  return (
    <UIContext.Provider value={{ setAlert }}>
      {children}
      <Snackbar
        open={alert.show}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          elevation={6}
          variant="filled"
          severity={alert.severity}
          sx={alert.sx}
        >
          {alert.message}
        </Alert>
      </Snackbar>
    </UIContext.Provider>
  );
};
