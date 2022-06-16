import React, { FC, useContext, useState } from 'react';
import firebase from 'firebase';
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  Typography,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Field, Formik, FormikProps } from 'formik';
import { UIContext } from '../../Unknown/UIContext';
import { getInitialValues, IValues, keyValues } from './util/values';
import FormikAppTextField from '../../Unknown/Infrastrucuture/Ui/Formik-app-mui-components/Formik-app-text-field';
import validationSchema from './util/validation-schema';
import NavLinkButton from '../../Unknown/Infrastrucuture/Ui/Nav-Link-Button';
import login, { register } from '../../Unknown/Root/const/links';
import useStyles from '../Styles';

const TITLES: Record<string, string> = {
  title: register.title,
  emailTitle: 'Email Address',
  fullNameTitle: 'Full name',
  passwordTitle: 'Password',
  requestPasswordTitle: 'Request password',
  successRegister: 'Welcome on board',
  errorRegister: 'Error register',
  yesAccount: 'Already have account?',
};

const SignUpScreen: FC = () => {
  const classes = useStyles();
  const { setAlert } = useContext(UIContext);

  const [showPassword, setShowPassword] = useState(false);
  const [showRequestPassword, setShowRequestPassword] = useState(false);

  const onClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const onClickShowRequestPassword = () => {
    setShowRequestPassword(!showRequestPassword);
  };
  const onMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <>
      <Box className={classes.root}>
        <Container fixed maxWidth="md" className={classes.fullHeight}>
          <Grid container className={classes.fullHeight}>
            <Grid item xs={6} className={classes.leftSide} />
            <Grid item xs={6} className={classes.rightSide}>
              <Formik
                initialValues={getInitialValues()}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                    setSubmitting(false);
                    // signInWithEmailAndPassword(values);
                  }, 200);
                }}
              >
                {(formik: FormikProps<IValues>) => {
                  const { isSubmitting } = formik;
                  return (
                    <form
                      autoComplete="off"
                      onSubmit={formik.handleSubmit}
                      className={classes.signup}
                    >
                      <Typography variant="h5" fontWeight="bold">
                        {TITLES.title}
                      </Typography>
                      <Field
                        component={FormikAppTextField}
                        name={keyValues.email}
                        type={keyValues.email}
                        label={TITLES.emailTitle}
                        variant="standard"
                        fullWidth
                        autoComplete="off"
                      />
                      <Field
                        component={FormikAppTextField}
                        name={keyValues.fullName}
                        label={TITLES.fullNameTitle}
                        variant="standard"
                        fullWidth
                        autoComplete="off"
                      />
                      <Field
                        component={FormikAppTextField}
                        name={keyValues.password}
                        type={showPassword ? 'text' : keyValues.password}
                        label={TITLES.passwordTitle}
                        variant="standard"
                        fullWidth
                        autoComplete="off"
                        InputProps={{
                          endAdornment: (
                            <InputAdornment
                              position="end"
                              style={{ backgroundColor: 'inherit' }}
                            >
                              <IconButton
                                onClick={onClickShowPassword}
                                onMouseDown={onMouseDownPassword}
                              >
                                {showPassword ? (
                                  <Visibility />
                                ) : (
                                  <VisibilityOff />
                                )}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />
                      <Field
                        component={FormikAppTextField}
                        name={keyValues.requestPassword}
                        type={showRequestPassword ? 'text' : keyValues.password}
                        label={TITLES.requestPasswordTitle}
                        variant="standard"
                        fullWidth
                        autoComplete="off"
                        InputProps={{
                          endAdornment: (
                            <InputAdornment
                              position="end"
                              style={{ backgroundColor: 'inherit' }}
                            >
                              <IconButton
                                onClick={onClickShowRequestPassword}
                                onMouseDown={onMouseDownPassword}
                              >
                                {showRequestPassword ? (
                                  <Visibility />
                                ) : (
                                  <VisibilityOff />
                                )}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />{' '}
                      <Button
                        variant="contained"
                        fullWidth
                        type="submit"
                        disabled={isSubmitting}
                      >
                        {TITLES.title}
                      </Button>
                    </form>
                  );
                }}
              </Formik>
              <Box className={classes.footer}>
                <Typography>{TITLES.yesAccount}</Typography>
                <NavLinkButton link={login} />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default SignUpScreen;
