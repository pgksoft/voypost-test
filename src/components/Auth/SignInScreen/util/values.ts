export interface ISingInFormValues {
  email: string;
  password: string;
}

export type TKeySingInFormValues = keyof ISingInFormValues;

export const keySingInFormValues: Record<
  TKeySingInFormValues,
  TKeySingInFormValues
> = {
  email: 'email',
  password: 'password',
};

export const getInitialSingInFormValues = (): ISingInFormValues => {
  return { email: '', password: '' };
};
