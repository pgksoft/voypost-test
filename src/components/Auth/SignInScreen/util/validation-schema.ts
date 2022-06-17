import { object } from 'yup';
import {
  emailValidationSchema,
  passwordValidationSchema,
} from '../../Field-validation-schemes';
import { keySingInFormValues } from './values';

const validationSchema = object({
  [keySingInFormValues.email]: emailValidationSchema,
  [keySingInFormValues.password]: passwordValidationSchema,
});

export default validationSchema;
