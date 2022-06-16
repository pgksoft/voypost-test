import { string } from 'yup';

const MIN_PASSWORD_LENGTH = 12;

const TITLES: Record<string, string> = {
  stringValidateEmail: 'Invalid email address',
  stringValidateEmpty: 'Required',
  stringValidateMin: `Must be ${MIN_PASSWORD_LENGTH} characters or more`,
};

export const emailValidationSchema = string()
  .email(TITLES.stringValidateEmail)
  .required(TITLES.stringValidateEmpty);

export const fullNameValidationSchema = string().required(
  TITLES.stringValidateEmpty,
);

export const passwordValidationSchema = string()
  .min(MIN_PASSWORD_LENGTH, TITLES.stringValidateMin)
  .required(TITLES.stringValidateEmpty);
