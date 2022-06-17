import { object } from 'yup';
import {
  emailValidationSchema,
  passwordValidationSchema,
} from '../../Field-validation-schemes';
import { keySingsInFormValues } from './values';

const validationSchema = object({
  [keySingsInFormValues.email]: emailValidationSchema,
  [keySingsInFormValues.password]: passwordValidationSchema,
});

export default validationSchema;
