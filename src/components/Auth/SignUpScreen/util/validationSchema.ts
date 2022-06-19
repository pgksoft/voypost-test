import { object, string, ref } from 'yup';
import { keySingUpFormValues } from './values';

const MIN_PASSWORD_LENGTH = 12;

const TITLES = {
  stringValidateEmail: 'Invalid email address',
  stringValidateEmpty: 'Required',
  stringValidateMin: `Must be ${MIN_PASSWORD_LENGTH} characters or more`,
  stringValidateFullName:
    'Name field has to contain at least 2 words, each of which has to start from a capital letter',
  notMatchPasswords: "Passwords don't match!",
};

const emailValidationSchema = string()
  .email(TITLES.stringValidateEmail)
  .required(TITLES.stringValidateEmpty);

const passwordValidationSchema = string()
  .min(MIN_PASSWORD_LENGTH, TITLES.stringValidateMin)
  .required(TITLES.stringValidateEmpty);

const fullNameValidationSchema = string()
  .required(TITLES.stringValidateEmpty)
  .matches(
    /^[A-Z][a-z]+[,.'-]?(?: [A-Z][a-z']+[,.'-]?){1,}$/,
    TITLES.stringValidateFullName,
  )
  .trim('spaces');

const requestPasswordValidationSchema = string()
  .oneOf([ref(keySingUpFormValues.password), null], TITLES.notMatchPasswords)
  .min(MIN_PASSWORD_LENGTH, TITLES.stringValidateMin)
  .required(TITLES.stringValidateEmpty);

const validationSchema = object({
  [keySingUpFormValues.email]: emailValidationSchema,
  [keySingUpFormValues.fullName]: fullNameValidationSchema,
  [keySingUpFormValues.password]: passwordValidationSchema,
  [keySingUpFormValues.requestPassword]: requestPasswordValidationSchema,
});

export default validationSchema;
