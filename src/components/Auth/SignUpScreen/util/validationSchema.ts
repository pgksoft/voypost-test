import { object } from 'yup';
import {
  emailValidationSchema,
  fullNameValidationSchema,
  passwordValidationSchema,
} from '../../FieldValidationSchemes';
import { keySingUpFormValues } from './values';

const validationSchema = object({
  [keySingUpFormValues.email]: emailValidationSchema,
  [keySingUpFormValues.fullName]: fullNameValidationSchema,
  [keySingUpFormValues.password]: passwordValidationSchema,
  [keySingUpFormValues.requestPassword]: passwordValidationSchema,
});

export default validationSchema;
