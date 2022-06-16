export interface IValues {
  email: string;
  password: string;
}

export type TKeyValues = keyof IValues;

export const keyValues: Record<TKeyValues, TKeyValues> = {
  email: 'email',
  password: 'password',
};

export const getInitialValues = (): IValues => {
  return { email: '', password: '' };
};
