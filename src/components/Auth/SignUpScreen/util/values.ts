export interface ISingUpFormValues {
  email: string;
  fullName: string;
  password: string;
  requestPassword: string;
}

export type TKeySingUpFormValues = keyof ISingUpFormValues;

export const keySingUpFormValues: Record<
  TKeySingUpFormValues,
  TKeySingUpFormValues
> = {
  email: 'email',
  fullName: 'fullName',
  password: 'password',
  requestPassword: 'requestPassword',
};

export const getInitialSingUpFormValues = (): ISingUpFormValues => {
  return { email: '', fullName: '', password: '', requestPassword: '' };
};
