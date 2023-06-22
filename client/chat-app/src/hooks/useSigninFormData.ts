import { useState } from 'react';
import { FormikValues, useFormik } from 'formik';
import { validateSigninForm } from '../utils/validate';
import { submitSigninData } from '../utils/api';
import { useNavigate } from 'react-router-dom';

function useSigninFormData() {
  const [loading, setLoading] = useState(false);
  const [errorResponse, setErrorResponse] = useState<string | undefined>(
    undefined
  );
  const [passwordType, setPasswordType] = useState<string>('password');
  const navigate = useNavigate();

  const errors = {};

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate: (values) => validateSigninForm(values, errors),
    onSubmit: (values) => handleSubmit(values),
  });

  const handleSubmit = async (values: FormikValues) => {
    setLoading(true);
    try {
      const response = await submitSigninData(values);
      if (typeof response === 'object') {
        if (response.status !== 201) {
          formik.resetForm();
          setLoading(false);
          setErrorResponse(response.message);
        } else {
          formik.resetForm();
          setLoading(false);
          navigate('/');
        }
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
        console.log(error.stack);
        formik.resetForm();
      }
    }
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
    loading,
    errorResponse,
  };
}

export default useSigninFormData;
