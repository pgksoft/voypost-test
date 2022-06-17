import React, { FC } from 'react';
import { FieldProps, getIn } from 'formik';
import { TextFieldProps, TextField } from '@mui/material';

export type TFormikAppTextFieldProps = FieldProps & TextFieldProps;

const FormikAppTextField: FC<TFormikAppTextFieldProps> = (
  props: TFormikAppTextFieldProps,
) => {
  const { error, helperText, form, field, ...rest } = props;

  const isTouched = getIn(form.touched, field.name);
  const errorMessage = getIn(form.errors, field.name);

  return (
    <TextField
      error={error ?? Boolean(isTouched && errorMessage)}
      helperText={
        helperText ?? (isTouched && errorMessage ? errorMessage : undefined)
      }
      {...rest} // includes any Material-UI specific props
      {...field} // includes all props contributed by the Formik Field/FastField
    />
  );
};

export default FormikAppTextField;
