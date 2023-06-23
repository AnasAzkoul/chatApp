import { useState } from 'react';
import { FormikValues, useFormik } from 'formik';
import { validate } from '../utils/validate';
import { submitRegisterData } from '../utils/api';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';



const useRegisterFormData = () => {
  const mutation = useMutation({
    mutationFn: submitRegisterData,
  })

  const [passwordType, setPasswordType] = useState({
    password: 'password',
    confirmPassword: 'password',
  });

  const errors = {};

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

  const navigate = useNavigate();

  const handleSubmit = async (values: FormikValues) => {
    mutation.mutate(values);
    console.log(mutation.isSuccess)
    if(mutation.isSuccess === true) {
      formik.resetForm()
      navigate('/')
    }
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
    mutation
  };
};

export default useRegisterFormData;
