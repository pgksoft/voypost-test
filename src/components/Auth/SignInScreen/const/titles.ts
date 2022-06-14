import MIN_PASSWORD_LENGTH from './constraints';

const TITLES_SIGN_IN: Record<string, string> = {
  title: 'Login',
  emailTitle: 'Email Address',
  passwordTitle: 'Password',
  stringValidateEmail: 'Invalid email address',
  stringValidateEmpty: 'Required',
  stringValidateMin: `Must be ${MIN_PASSWORD_LENGTH} characters or more`,
  successSignIn: 'You have successfully logged in',
  errorSignIn: 'Error sign in',
};

export default TITLES_SIGN_IN;
