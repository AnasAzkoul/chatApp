import { BASE_URL } from './config';

export const submitFormData = async <T>(formData: T) => {
  try {
    const response = await fetch(`${BASE_URL}/users/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    console.log(response.status);
    const data = await response.json();

    return {
      status: response.status,
      data
    }
  } catch (error) {
    if(error instanceof Error) {
      console.log(error.message);
      return error.message
    }
  }
};
