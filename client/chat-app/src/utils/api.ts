import { FormikValues } from 'formik';
import { BASE_URL } from './config';
import axios from 'axios';
import queryClient from './QueryClient';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const processError = (error: any) => {
  if (error instanceof Error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
    return error;
  }
};

// <------------------------ Register new user ------------------------>
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

// <------------------------ Sign-in an existing user ------------------------>
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

// <------------------------ Logout a signed-in user ------------------------>
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

// <------------------------ Fetch the Authenticated user ------------------------>
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

// <------------------------ prefetch the Authenticated user ------------------------>
export const prefetchAuthUser = async () => {
  await queryClient.prefetchQuery({
    queryFn: getAuthUser,
    queryKey: ['auth_user'],
  });
};

// <------------------------ Fetch all chat Rooms ------------------------>
export const getAllRooms = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/rooms`, {
      withCredentials: true,
    });
    const data = await response.data;
    return data;
  } catch (error) {
    return processError(error);
  }
};
