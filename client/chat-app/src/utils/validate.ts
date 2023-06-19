/* eslint-disable no-useless-escape */
import { FormikValues } from 'formik';

interface ValidationErrors {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  gender: string;
  age: string;
  password: string;
  confirmPassword: string;
}
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,5})+$/;
const passRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export function validate(
  values: FormikValues,
  errors: Partial<ValidationErrors>
) {
  if (!values.firstName || values.firstName.length < 3) {
    errors.firstName = 'Required, at least 3 characters';
  }
  if (!values.lastName || values.lastName.length < 3) {
    errors.lastName = 'Required, at least 3 characters';
  }
  if (!values.userName || values.userName.length < 6) {
    errors.userName = 'Required, at least 6 characters';
  }
  if (!emailRegex.test(values.email.toLowerCase())) {
    errors.email = 'Invalid email address';
  }
  if (values.gender.toLowerCase() === 'select gender') {
    errors.gender = 'Required';
  }
  if (!values.age || typeof parseInt(values.age) !== 'number') {
    errors.age = 'Required, please write a number for your age';
  }
  if (!passRegex.test(values.password)) {
    errors.password =
      'Minimum eight characters, at least one uppercase letter, one lowercase letter and one number:';
  }
  if (values.password !== values.confirmPassword) {
    errors.confirmPassword = 'Passwords do not match';
  }

  return errors;
}

export function validateSigninForm(
  values: FormikValues,
  errors: Partial<Pick<ValidationErrors, 'email' | 'password'>>
) {
  if (!emailRegex.test(values.email.toLowerCase())) {
    errors.email = 'Invalid email address';
  }
  if (!passRegex.test(values.password)) {
    errors.password =
      'Minimum eight characters, at least one uppercase letter, one lowercase letter and one number:';
  }

  return errors;
}
