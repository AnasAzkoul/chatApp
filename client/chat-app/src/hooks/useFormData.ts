import { useState } from 'react';
import { FormikValues, useFormik } from 'formik';
import {validate} from '../utils/validate';
import { submitFormData } from '../utils/api';
import { ValidationError } from 'zod-validation-error';



const useRegisterFormData = () => {
  const [passwordType, setPasswordType] = useState({
    password: 'password',
    confirmPassword: 'password',
  });

  const errors = {}

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      userName: '',
      email: '',
      gender: 'male',
      age: '',
      password: '',
      confirmPassword: '',
    },
    validate: (values) => validate(values, errors),
    onSubmit: (values) => handleSubmit(values),
  });

  const handleSubmit = (values: FormikValues) => {
    console.log(values);
  };

  const handlePasswordToggle = () => {
    setPasswordType((prev) => {
      if (prev.password === 'password') {
        return {
          ...prev,
          password: 'text',
        };
      } else {
        return {
          ...prev,
          password: 'password',
        };
      }
    });
  };

  const handleConfirmPasswordToggle = () => {
    setPasswordType((prev) => {
      if (prev.confirmPassword === 'password') {
        return {
          ...prev,
          confirmPassword: 'text',
        };
      } else {
        return {
          ...prev,
          confirmPassword: 'password',
        };
      }
    });
  };

  return {
    formik,
    handlePasswordToggle,
    handleConfirmPasswordToggle,
    passwordType,
  };
};

export default useRegisterFormData;
