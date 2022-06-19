import React, { FC, useContext } from 'react';
import firebase from 'firebase';
import { Link } from 'react-router-dom';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { Field, Formik, FormikProps } from 'formik';
import { UIContext } from '../../Unknown/UIContext';
import {
  getInitialSingUpFormValues,
  ISingUpFormValues,
  keySingUpFormValues,
} from './util/values';
import FormikAppTextField from '../../Unknown/Infrastrucuture/Ui/FormikAppMuiComponents/FormikAppTextField';
import validationSchema from './util/validationSchema';
import login, { register } from '../../Unknown/Root/const/links';
import useStyles from '../Styles';
import PasswordField from '../../Unknown/Infrastrucuture/PasswordField';

const TITLES = {
  title: register.title,
  emailTitle: 'Email Address',
  fullNameTitle: 'Full name',
  passwordTitle: 'Password',
  requestPasswordTitle: 'Request password',
  successRegister: 'Welcome on board🚀',
  errorRegister: 'Error register',
  yesAccount: 'Already have account?',
};

const SignUpScreen: FC = () => {
  const classes = useStyles();
  const { setAlert } = useContext(UIContext);

  const signUp = async (values: ISingUpFormValues) => {
    const { email, password, fullName } = values;
    try {
      const credential = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      if (credential.user) {
        await credential.user.updateProfile({ displayName: fullName });
      } else {
        throw new Error(TITLES.errorRegister);
      }
      setAlert({
        show: true,
        severity: 'info',
        message: TITLES.successRegister,
      });
    } catch (error) {
      const message = error instanceof Error && error.message;
      setAlert({
        show: true,
        severity: 'error',
        message: message || TITLES.errorRegister,
      });
    }
  };

  return (
    <>
      <Box className={classes.root}>
        <Container fixed maxWidth="md" className={classes.fullHeight}>
          <Grid container className={classes.fullHeight}>
            <Grid item xs={6} className={classes.leftSide} />
            <Grid item xs={6} className={classes.rightSide}>
              <Formik
                initialValues={getInitialSingUpFormValues()}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                  signUp(values);
                  setSubmitting(false);
                }}
              >
                {(formik: FormikProps<ISingUpFormValues>) => {
                  const { isSubmitting } = formik;
                  return (
                    <form
                      autoComplete="off"
                      onSubmit={formik.handleSubmit}
                      className={classes.signUp}
                    >
                      <Typography variant="h5Bold">{TITLES.title}</Typography>
                      <Field
                        component={FormikAppTextField}
                        name={keySingUpFormValues.email}
                        type={keySingUpFormValues.email}
                        label={TITLES.emailTitle}
                        variant="standard"
                        fullWidth
                        autoComplete="off"
                      />
                      <Field
                        component={FormikAppTextField}
                        name={keySingUpFormValues.fullName}
                        label={TITLES.fullNameTitle}
                        variant="standard"
                        fullWidth
                        autoComplete="off"
                      />
                      <Field
                        component={PasswordField}
                        name={keySingUpFormValues.password}
                        label={TITLES.passwordTitle}
                        variant="standard"
                        fullWidth
                        autoComplete="off"
                      />
                      <Field
                        component={PasswordField}
                        name={keySingUpFormValues.requestPassword}
                        label={TITLES.requestPasswordTitle}
                        variant="standard"
                        fullWidth
                        autoComplete="off"
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
                <Typography>{TITLES.yesAccount}</Typography>
                <Button variant="text" component={Link} to={login.url}>
                  {login.title}
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default SignUpScreen;
