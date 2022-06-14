import { string, object } from 'yup';
import MIN_PASSWORD_LENGTH from '../const/constraints';
import TITLES_SIGN_IN from '../const/titles';
import { KeyValues } from './values';

const emailValidationSchema = string()
  .email(TITLES_SIGN_IN.stringValidateEmail)
  .required(TITLES_SIGN_IN.stringValidateEmpty);

const passwordValidationSchema = string()
  .min(MIN_PASSWORD_LENGTH, TITLES_SIGN_IN.stringValidateMin)
  .required(TITLES_SIGN_IN.stringValidateEmpty);

const validationSchema = object({
  [KeyValues.email]: emailValidationSchema,
  [KeyValues.password]: passwordValidationSchema,
});

export default validationSchema;
