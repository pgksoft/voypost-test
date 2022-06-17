export interface ISingsUpFormValues {
  email: string;
  fullName: string;
  password: string;
  requestPassword: string;
}

export type TKeySingsUpFormValues = keyof ISingsUpFormValues;

export const keySingsUpFormValues: Record<
  TKeySingsUpFormValues,
  TKeySingsUpFormValues
> = {
  email: 'email',
  fullName: 'fullName',
  password: 'password',
  requestPassword: 'requestPassword',
};

export const getInitialSingsUpFormValues = (): ISingsUpFormValues => {
  return { email: '', fullName: '', password: '', requestPassword: '' };
};
