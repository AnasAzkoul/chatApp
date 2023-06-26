import { useState } from 'react';
import {
  type SigninFormPassword,
  type RegisterFormPasswords,
} from '../utils/types';
import {
  passwordHandler,
  registerPasswordHandler,
  registerConfirmPasswordHandler,
} from '../utils/helpers';

export function useToggleSigninPassword() {
  const [passwordType, setPasswordType] =
    useState<SigninFormPassword>('password');

  const handleTogglePassword = () => {
    setPasswordType((prev) => passwordHandler(prev));
  };

  return {
    handleTogglePassword,
    passwordType,
  };
}

export function useToggleRegisterPasswords() {
  const [passwordType, setPasswordType] = useState<RegisterFormPasswords>({
    password: 'password',
    confirmPassword: 'password',
  });

  const handleTogglePassword = () => {
    setPasswordType((prev) => registerPasswordHandler(prev));
  };

  const handleToggleConfirmPassword = () => {
    setPasswordType((prev) => registerConfirmPasswordHandler(prev));
  };

  return {
    passwordType,
    handleTogglePassword,
    handleToggleConfirmPassword,
  };
}
