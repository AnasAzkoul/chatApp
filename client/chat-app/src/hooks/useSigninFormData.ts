import { useState } from 'react';
import { FormikValues, useFormik } from 'formik';
import { validateSigninForm } from '../utils/validate';
import { submitFormData } from '../utils/api';

function useSigninFormData() {
  const [passwordType, setPasswordType] = useState<string>('password');

  const errors = {};

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate: (values) => validateSigninForm(values, errors),
    onSubmit: (values) => handleSubmit(values),
  });

  const handleSubmit = (values: FormikValues) => {
    console.log(values);
  };

  const handleTogglePassword = () => {
    setPasswordType((prev) => {
      if (prev === 'password') {
        return 'text';
      } else {
        return 'password';
      }
    });
  };

  return {
    formik,
    errors,
    passwordType,
    handleTogglePassword,
  };
}


export default useSigninFormData
