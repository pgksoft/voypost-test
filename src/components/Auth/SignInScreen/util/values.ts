export interface ISingsInFormValues {
  email: string;
  password: string;
}

export type TKeySingsInFormValues = keyof ISingsInFormValues;

export const keySingsInFormValues: Record<
  TKeySingsInFormValues,
  TKeySingsInFormValues
> = {
  email: 'email',
  password: 'password',
};

export const getInitialSingsInFormValues = (): ISingsInFormValues => {
  return { email: '', password: '' };
};
