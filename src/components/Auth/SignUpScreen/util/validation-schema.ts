import { object } from 'yup';
import {
  emailValidationSchema,
  fullNameValidationSchema,
  passwordValidationSchema,
} from '../../Field-validation-schemes';
import { keySingsUpFormValues } from './values';

const validationSchema = object({
  [keySingsUpFormValues.email]: emailValidationSchema,
  [keySingsUpFormValues.fullName]: fullNameValidationSchema,
  [keySingsUpFormValues.password]: passwordValidationSchema,
  [keySingsUpFormValues.requestPassword]: passwordValidationSchema,
});

export default validationSchema;
