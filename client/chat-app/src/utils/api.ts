import { FormikValues } from 'formik';
import { BASE_URL } from './config';
import axios from 'axios';

export const submitRegisterData = async (formData: FormikValues) => {
  return await axios.post(`${BASE_URL}/users/register`, formData, {
    withCredentials: true,
  });
};

export const submitSigninData = async (formData: FormikValues) => {
  try {
    const response = await fetch(`${BASE_URL}/users/auth`, {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      return await response.json();
    }
  } catch (error) {
    if (error instanceof Error) {
      return error;
    }
  }
};

export const handleLogoutUser = async () => {
  const response = await fetch(`${BASE_URL}/users/logout`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });

  return await response.json();
};
