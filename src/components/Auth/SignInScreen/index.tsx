import React, { useContext } from 'react';
import firebase from 'firebase';
import { Link } from 'react-router-dom';
import { Typography, Button, Box } from '@mui/material';
import { Field, Formik, FormikProps } from 'formik';
import { UIContext } from '../../Unknown/UIContext';
import {
  getInitialSingInFormValues,
  ISingInFormValues,
  keySingInFormValues,
} from './util/values';
import FormikAppTextField from '../../Unknown/Infrastrucuture/Ui/FormikAppMuiComponents/FormikAppTextField';
import validationSchema from './util/validationSchema';
import useStyles from '../Styles';
import login, { register } from '../../Unknown/Root/const/links';
import PasswordField from '../../Unknown/Infrastrucuture/PasswordField';

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

  const signInWithEmailAndPassword = async (values: ISingInFormValues) => {
    const { email, password } = values;
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      const message = error instanceof Error && error.message;
      setAlert({
        show: true,
        severity: 'error',
        message: message || TITLES.errorSignIn,
      });
    }
  };

  return (
    <>
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
              <Typography variant="h5Bold">{TITLES.title}</Typography>
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
                component={PasswordField}
                name={keySingInFormValues.password}
                label={TITLES.passwordTitle}
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
        <Typography>{TITLES.notAccount}</Typography>
        <Button variant="text" component={Link} to={register.url}>
          {register.title}
        </Button>
      </Box>
    </>
  );
};

export default SignInScreen;
