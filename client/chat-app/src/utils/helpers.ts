import { type SigninFormPassword, type RegisterFormPasswords } from './types';

export const passwordHandler = (value: SigninFormPassword) => {
  if (value === 'password') {
    return 'text';
  } else {
    return 'password';
  }
};

export const registerPasswordHandler = (
  value: RegisterFormPasswords
): RegisterFormPasswords => {
  if (value.password === 'password') {
    return {
      ...value,
      password: 'text',
    };
  } else {
    return {
      ...value,
      password: 'password',
    };
  }
};

export const registerConfirmPasswordHandler = (
  value: RegisterFormPasswords
): RegisterFormPasswords => {
  if (value.confirmPassword === 'password') {
    return {
      ...value,
      confirmPassword: 'text',
    };
  } else {
    return {
      ...value,
      confirmPassword: 'password',
    };
  }
};
