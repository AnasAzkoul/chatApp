import { useState } from 'react';
import { NewUserTypes, newUser } from '../utils/types';

const useRegisterFormData = () => {
  const [formData, setFormData] = useState<NewUserTypes>({
    userName: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    confirmPassword: '',
    gender: '',
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Validation
    const isValid = newUser.safeParse(formData);

    if (!isValid) {
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      return;
    }

    const ageNum = parseInt(formData.age);

    // eslint-disable-next-line no-constant-condition
    if (!(typeof ageNum === 'number')) {
      console.log('please enter a number');
      return;
    }

    // POST Request
    const response = await fetch(
      'http://localhost:5003/api/v1/users/register',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      }
    );

    const data = await response.json();

    setFormData({
      userName: '',
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      confirmPassword: '',
      gender: '',
      age: '',
    });
  };

  return {
    formData,
    handleOnchange,
    handleSubmit,
  };
};

export default useRegisterFormData;
