import { object } from 'yup';
import {
  emailValidationSchema,
  passwordValidationSchema,
} from '../../Field-validation-schemes';
import { keyValues } from './values';

const validationSchema = object({
  [keyValues.email]: emailValidationSchema,
  [keyValues.password]: passwordValidationSchema,
});

export default validationSchema;