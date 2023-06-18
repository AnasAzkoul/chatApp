import { useState } from 'react';
import { ZodError} from 'zod';
import { submitFormData } from '../utils/api';
import { fromZodError } from 'zod-validation-error';
import {
  type NewUserTypes,
  newUser,
  type FormErrorTypes,
} from '../utils/types';

const useRegisterFormData = () => {
  const [errors, setErrors] = useState<FormErrorTypes>({});
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<NewUserTypes>({
    userName: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    confirmPassword: '',
    gender: 'male',
    age: '',
  });

  const handleOnchange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   // validate form data
  //   try {
  //     newUser.parse(formData);
  //   } catch (error) {
  //     if (error instanceof ZodError) {
  //       const validationError = fromZodError(error);
  //       const errorData = validationError.details.map((issue) => ({
  //         [issue.path[0]]:issue.message,
  //       }));
  //       console.log(errorData)
  //     }
  //   }
  // };

  setFormData({
    userName: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    confirmPassword: '',
    gender: 'male',
    age: '',
  });

  return {
    formData,
    handleOnchange,
    // handleSubmit,
    loading,
  };
};

export default useRegisterFormData;
