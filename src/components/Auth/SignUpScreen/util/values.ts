export interface IValues {
  email: string;
  fullName: string;
  password: string;
  requestPassword: string;
}

export type TKeyValues = keyof IValues;

export const keyValues: Record<TKeyValues, TKeyValues> = {
  email: 'email',
  fullName: 'fullName',
  password: 'password',
  requestPassword: 'requestPassword',
};

export const getInitialValues = (): IValues => {
  return { email: '', fullName: '', password: '', requestPassword: '' };
};
