import { object } from 'yup';
import {
  emailValidationSchema,
  fullNameValidationSchema,
  passwordValidationSchema,
} from '../../Field-validation-schemes';
import { keyValues } from './values';

const validationSchema = object({
  [keyValues.email]: emailValidationSchema,
  [keyValues.fullName]: fullNameValidationSchema,
  [keyValues.password]: passwordValidationSchema,
  [keyValues.requestPassword]: passwordValidationSchema,
});

export default validationSchema;
