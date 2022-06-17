import { string, ref } from 'yup';
import { keySingsInFormValues } from '../SignInScreen/util/values';

const MIN_PASSWORD_LENGTH = 12;

const TITLES: Record<string, string> = {
  stringValidateEmail: 'Invalid email address',
  stringValidateEmpty: 'Required',
  stringValidateMin: `Must be ${MIN_PASSWORD_LENGTH} characters or more`,
  stringValidateFullName:
    'Name field has to contain at least 2 words, each of which has to start from a capital letter',
};

export const emailValidationSchema = string()
  .email(TITLES.stringValidateEmail)
  .required(TITLES.stringValidateEmpty);

export const fullNameValidationSchema = string()
  .required(TITLES.stringValidateEmpty)
  .matches(
    /^[A-Z][a-z]+[,.'-]?(?: [A-Z][a-z']+[,.'-]?){1,}$/,
    TITLES.stringValidateFullName,
  )
  .trim('spaces');

export const passwordValidationSchema = string()
  .oneOf([ref(keySingsInFormValues.password), null], "Passwords don't match!")
  .min(MIN_PASSWORD_LENGTH, TITLES.stringValidateMin)
  .required(TITLES.stringValidateEmpty);
