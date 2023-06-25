import { useState } from 'react';
import { FormikValues, useFormik } from 'formik';
import { validateSigninForm } from '../utils/validate';
import { submitSigninData } from '../utils/api';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';


function useSigninFormData() {
  const queryClient = useQueryClient();

  const navigate = useNavigate();

  const [passwordType, setPasswordType] = useState<string>('password');
  const errors = {};

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate: (values) => validateSigninForm(values, errors),
    onSubmit: (values) => mutation.mutate(values),
  });

  const mutation = useMutation({
    mutationFn: submitSigninData,
    onSuccess: (response) => handleOnSuccess(response),
  });

  const handleOnSuccess = (response: any) => {
    formik.resetForm();
    navigate('/');
    queryClient.setQueryData(['user'], response);
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
    mutation,
  };
}

export default useSigninFormData;
