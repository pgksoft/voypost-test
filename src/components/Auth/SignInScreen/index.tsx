import React, { useContext, useEffect, useState } from 'react';
import firebase from 'firebase';
import { useHistory } from 'react-router-dom';
import {
  Container,
  Grid,
  Typography,
  Button,
  Box,
  InputAdornment,
  IconButton,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Field, Formik, FormikProps } from 'formik';
import { UIContext } from '../../Unknown/UIContext';
import heroImage from '../../../common/images/hero-image.png';
import voypostLogo from '../../../common/images/voypost-logo.png';
import { getInitialValues, IValues, KeyValues } from './util/values';
import FormikAppTextField from '../../Unknown/Infrastrucuture/Ui/Formik-app-mui-components/Formik-app-text-field';
import TITLES_SIGN_IN from './const/titles';
import validationSchema from './util/validation-schema';
import login, { home } from '../../Unknown/Root/const/links';
import RouteContext from '../../Unknown/Route-context';

export const useStyles = makeStyles({
  root: {
    display: 'flex',
    height: '100vh',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullHeight: { height: '100%' },
  leftSide: {
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    backgroundImage: `url(${heroImage})`,
  },
  rightSide: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 20%',
    backgroundSize: '20%',
    backgroundImage: `url(${voypostLogo})`,
  },
  signin: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '70%',
    height: '50%',
  },
});

const SignInScreen: React.FC = () => {
  const classes = useStyles();
  const { setAlert } = useContext(UIContext);
  const { setActiveMainLink } = useContext(RouteContext);
  const history = useHistory();

  const [values, setValues] = useState<IValues | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [isLogging, setIsLogging] = useState(false);

  setActiveMainLink(login);

  const onClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  useEffect(() => {
    if (values) {
      setIsLogging(true);
      const { email, password } = values;
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          // Signed in
          setAlert({
            show: true,
            severity: 'success',
            message: TITLES_SIGN_IN.successSignIn,
          });
          setIsLogging(false);
          history.push(home.url);
        })
        .catch((error) => {
          const { message } = error;
          setAlert({
            show: true,
            severity: 'error',
            message: `${TITLES_SIGN_IN.errorSignIn}${
              (message && `: ${message}`) || ''
            }`,
          });
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setAlert, values]);

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
                onSubmit={(newValues, { setSubmitting }) => {
                  setTimeout(() => {
                    setValues(newValues);
                    setSubmitting(false);
                  }, 200);
                }}
              >
                {(formik: FormikProps<IValues>) => {
                  return (
                    <form
                      autoComplete="off"
                      onSubmit={formik.handleSubmit}
                      className={classes.signin}
                    >
                      <Typography variant="h5" fontWeight="bold">
                        {TITLES_SIGN_IN.title}
                      </Typography>
                      <Field
                        component={FormikAppTextField}
                        name={KeyValues.email}
                        type={KeyValues.email}
                        label={TITLES_SIGN_IN.emailTitle}
                        variant="standard"
                        fullWidth
                        autoComplete="off"
                      />
                      <Field
                        component={FormikAppTextField}
                        name={KeyValues.password}
                        type={showPassword ? 'text' : KeyValues.password}
                        label={TITLES_SIGN_IN.passwordTitle}
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
                        disabled={isLogging}
                      >
                        {TITLES_SIGN_IN.title}
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
