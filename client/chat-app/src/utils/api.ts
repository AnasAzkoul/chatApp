import { FormikValues } from 'formik';
import { BASE_URL } from './config';
import axios from 'axios';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const processError = (error: any) => {
  if (error instanceof Error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
    return error;
  }
};

export const submitRegisterData = async (formData: FormikValues) => {
  try {
    const response = await axios.post(`${BASE_URL}/users/register`, formData, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    return processError(error);
  }
};

export const submitSigninData = async (formData: FormikValues) => {
  try {
    const response = await axios.post(`${BASE_URL}/users/auth`, formData, {
      withCredentials: true,
    });
    const data = await response.data;
    return data;
  } catch (error) {
    return processError(error);
  }
};

export const handleLogoutUser = async () => {
  try {
    const response = await fetch(`${BASE_URL}/users/logout`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });

    return await response.json();
  } catch (error) {
    return processError(error);
  }
};

export const getAuthUser = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/users/auth`, {
      withCredentials: true,
    });
    const data = await response.data;
    return data;
  } catch (error) {
    return processError(error);
  }
};
