import React, { FC, useState } from 'react';
import { IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import FormikAppTextField, {
  TFormikAppTextFieldProps,
} from '../Ui/FormikAppMuiComponents/FormikAppTextField';

const PasswordField: FC<TFormikAppTextFieldProps> = (
  props: TFormikAppTextFieldProps,
) => {
  const [showPassword, setShowPassword] = useState(false);

  const onClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <FormikAppTextField
      type={(showPassword && 'text') || 'password'}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end" style={{ backgroundColor: 'inherit' }}>
            <IconButton
              onClick={onClickShowPassword}
              onMouseDown={onMouseDownPassword}
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      {...props}
    />
  );
};

export default PasswordField;
