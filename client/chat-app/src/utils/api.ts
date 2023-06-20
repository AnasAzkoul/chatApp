import { BASE_URL } from './config';

export const submitFormData = async <T>(formData: T) => {
  try {
    const response = await fetch(`${BASE_URL}/users/register`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
      credentials: 'include',
    });
    console.log(response.status);

    console.log(response.statusText);

    const data = await response.json();

    console.log(data);

    return {
      status: response.status,
      data,
    };
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      return error.message;
    }
  }
};
