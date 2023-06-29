import { useFormik } from 'formik';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { validateSigninForm } from '../utils/validate';
import { submitSigninData } from '../utils/api';
import { type UserResponseData } from '../utils/types';
import { userKeys } from '../utils/queryKeys';

function useSigninFormData() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
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

  const handleOnSuccess = (response: UserResponseData) => {
    // queryClient.setQueryData(userKeys.user, response);
    queryClient.invalidateQueries(['auth_user']);
    formik.resetForm();
    navigate('/');
  };

  return {
    formik,
    errors,
    mutation,
  };
}

export default useSigninFormData;
