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
import { getInitialValues, IValues, KeyValues } from './util/values';
import FormikAppTextField from '../../Unknown/Infrastrucuture/Ui/Formik-app-mui-components/Formik-app-text-field';
import validationSchema from './util/validation-schema';
import useStyles from './util/styles';

const TITLES: Record<string, string> = {
  title: 'Login',
  emailTitle: 'Email Address',
  passwordTitle: 'Password',
  successSignIn: 'You have successfully logged in',
  errorSignIn: 'Error sign in',
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
      .then(() => {
        // Signed in
        setAlert({
          show: true,
          severity: 'success',
          message: TITLES.successSignIn,
        });
      })
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
                      className={classes.signin}
                    >
                      <Typography variant="h5" fontWeight="bold">
                        {TITLES.title}
                      </Typography>
                      <Field
                        component={FormikAppTextField}
                        name={KeyValues.email}
                        type={KeyValues.email}
                        label={TITLES.emailTitle}
                        variant="standard"
                        fullWidth
                        autoComplete="off"
                      />
                      <Field
                        component={FormikAppTextField}
                        name={KeyValues.password}
                        type={showPassword ? 'text' : KeyValues.password}
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
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default SignInScreen;
