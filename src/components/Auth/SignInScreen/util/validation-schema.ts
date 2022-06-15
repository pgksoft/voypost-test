import { string, object } from 'yup';
import { KeyValues } from './values';

const MIN_PASSWORD_LENGTH = 6;

const TITLES: Record<string, string> = {
  stringValidateEmail: 'Invalid email address',
  stringValidateEmpty: 'Required',
  stringValidateMin: `Must be ${MIN_PASSWORD_LENGTH} characters or more`,
};

const emailValidationSchema = string()
  .email(TITLES.stringValidateEmail)
  .required(TITLES.stringValidateEmpty);

const passwordValidationSchema = string()
  .min(MIN_PASSWORD_LENGTH, TITLES.stringValidateMin)
  .required(TITLES.stringValidateEmpty);

const validationSchema = object({
  [KeyValues.email]: emailValidationSchema,
  [KeyValues.password]: passwordValidationSchema,
});

export default validationSchema;
