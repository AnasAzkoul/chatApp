import { type SigninFormPassword, type RegisterFormPasswords } from './types';

// <------------------------ Sign-in Form password toggle ------------------------>

export const passwordHandler = (value: SigninFormPassword) => {
  if (value === 'password') {
    return 'text';
  } else {
    return 'password';
  }
};

// <------------------------ Register Form password toggle ------------------------>

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

// <------------------------ Register Form confirm password toggle ------------------------>

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


