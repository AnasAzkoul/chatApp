import { FormikValues, useFormik } from 'formik';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { validate } from '../utils/validate';
import { submitRegisterData } from '../utils/api';
import { userKeys } from '../utils/queryKeys';
import { type UserResponseData } from '../utils/types';
import { prefetchAuthUser } from '../utils/api';

const useRegisterFormData = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: submitRegisterData,
    onSuccess: (response) => handleSubmitSuccess(response),
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
    await mutation.mutate(values);
  };

  const handleSubmitSuccess = async (response: UserResponseData) => {
    // queryClient.setQueryData(userKeys.user, response);
    console.log('user is set');
    formik.resetForm();
    await prefetchAuthUser(); 
    navigate('/');
  };

  return {
    formik,
    mutation,
  };
};

export default useRegisterFormData;
