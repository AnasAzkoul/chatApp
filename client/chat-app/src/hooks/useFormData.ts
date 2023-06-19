import { useState } from 'react';
import { FormikValues, useFormik } from 'formik';
import { validate } from '../utils/validate';
import { submitFormData } from '../utils/api';
import { useNavigate } from 'react-router-dom';

const useRegisterFormData = () => {
  const [loading, setLoading] = useState(false);
  const [errorResponse, setErrorResponse] = useState<string | null>(null);

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
    setLoading(true);
    try {
      const response = await submitFormData(values);
      if (typeof response === 'object') {
        if (response.status !== 201) {
          formik.resetForm();
          setLoading(false);
          setErrorResponse(response.data);
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
    loading,
    errorResponse,
  };
};

export default useRegisterFormData;
