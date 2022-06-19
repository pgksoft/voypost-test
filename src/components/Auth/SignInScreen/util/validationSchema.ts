import { object, string } from 'yup';
import { keySingInFormValues } from './values';

const MIN_PASSWORD_LENGTH = 12;

const TITLES = {
  stringValidateEmail: 'Invalid email address',
  stringValidateEmpty: 'Required',
  stringValidateMin: `Must be ${MIN_PASSWORD_LENGTH} characters or more`,
};

export const emailValidationSchema = string()
  .email(TITLES.stringValidateEmail)
  .required(TITLES.stringValidateEmpty);

const passwordValidationSchema = string()
  .min(MIN_PASSWORD_LENGTH, TITLES.stringValidateMin)
  .required(TITLES.stringValidateEmpty);

const validationSchema = object({
  [keySingInFormValues.email]: emailValidationSchema,
  [keySingInFormValues.password]: passwordValidationSchema,
});

export default validationSchema;
