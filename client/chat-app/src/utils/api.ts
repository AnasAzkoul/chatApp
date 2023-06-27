import { FormikValues } from 'formik';
import { BASE_URL } from './config';
import axios from 'axios';
import { type UserResponseData } from './types';

export const submitRegisterData = async (
  formData: FormikValues
): Promise<UserResponseData> => {
  const response = await axios.post(`${BASE_URL}/users/register`, formData, {
    withCredentials: true,
  });

  return response.data;
};

export const submitSigninData = async (
  formData: FormikValues
): Promise<UserResponseData> => {
  const response = await axios.post(`${BASE_URL}/users/auth`, formData, {
    withCredentials: true,
  });

  return response.data;
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

export const getAuthUser = async () => {
  const response = axios.get(`${BASE_URL}/users/auth`, {
    withCredentials: true,
  });
  const data = (await response).data;
  return data;
};
