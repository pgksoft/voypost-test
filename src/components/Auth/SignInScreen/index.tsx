import React, { useContext, useState } from 'react';
import firebase from 'firebase';
import {
  Container,
  Grid,
  Typography,
  Button,
  Box,
  InputAdornment,
  IconButton,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Field, Formik, FormikProps } from 'formik';
import { UIContext } from '../../Unknown/UIContext';
import { getInitialValues, IValues, keyValues } from './util/values';
import FormikAppTextField from '../../Unknown/Infrastrucuture/Ui/Formik-app-mui-components/Formik-app-text-field';
import validationSchema from './util/validation-schema';
import useStyles from '../Styles';
import NavLinkButton from '../../Unknown/Infrastrucuture/Ui/Nav-Link-Button';
import login, { register } from '../../Unknown/Root/const/links';

const TITLES = {
  title: login.title,
  emailTitle: 'Email Address',
  passwordTitle: 'Password',
  successSignIn: 'You have successfully logged in',
  errorSignIn: 'Error sign in',
  notAccount: "Don't have an account?",
};

const SignInScreen: React.FC = () => {
  const classes = useStyles();
  const { setAlert } = useContext(UIContext);

  const [showPassword, setShowPassword] = useState(false);

  const onClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const signInWithEmailAndPassword = (values: IValues) => {
    const { email, password } = values;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        const { message } = error;
        setAlert({
          show: true,
          severity: 'error',
          message: `${TITLES.errorSignIn}${(message && `: ${message}`) || ''}`,
        });
      });
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
                    signInWithEmailAndPassword(values);
                  }, 200);
                }}
              >
                {(formik: FormikProps<IValues>) => {
                  const { isSubmitting } = formik;
                  return (
                    <form
                      autoComplete="off"
                      onSubmit={formik.handleSubmit}
                      className={classes.signIn}
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
                <Typography>{TITLES.notAccount}</Typography>
                <NavLinkButton link={register} />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default SignInScreen;
