import React, { useContext, useState } from 'react';
import firebase from 'firebase';
import { Link } from 'react-router-dom';
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
import {
  getInitialSingInFormValues,
  ISingInFormValues,
  keySingInFormValues,
} from './util/values';
import FormikAppTextField from '../../Unknown/Infrastrucuture/Ui/Formik-app-mui-components/Formik-app-text-field';
import validationSchema from './util/validation-schema';
import useStyles from '../Styles';
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

  const signInWithEmailAndPassword = (values: ISingInFormValues) => {
    const { email, password } = values;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        const { message } = error;
        setAlert({
          show: true,
          severity: 'error',
          message: message || TITLES.errorSignIn,
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
                initialValues={getInitialSingInFormValues()}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                  signInWithEmailAndPassword(values);
                  setSubmitting(false);
                }}
              >
                {(formik: FormikProps<ISingInFormValues>) => {
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
                        name={keySingInFormValues.email}
                        type={keySingInFormValues.email}
                        label={TITLES.emailTitle}
                        variant="standard"
                        fullWidth
                        autoComplete="off"
                      />
                      <Field
                        component={FormikAppTextField}
                        name={keySingInFormValues.password}
                        type={
                          showPassword ? 'text' : keySingInFormValues.password
                        }
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
                <Button variant="text" component={Link} to={register.url}>
                  {register.title}
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default SignInScreen;
