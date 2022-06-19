import { object } from 'yup';
import {
  emailValidationSchema,
  passwordValidationSchema,
} from '../../FieldValidationSchemes';
import { keySingInFormValues } from './values';

const validationSchema = object({
  [keySingInFormValues.email]: emailValidationSchema,
  [keySingInFormValues.password]: passwordValidationSchema,
});

export default validationSchema;
