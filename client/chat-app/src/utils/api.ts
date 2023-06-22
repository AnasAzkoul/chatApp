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

    const data = await response.json();

    console.log(data);

    return {
      status: response.status,
      ok: response.ok,
      text: response.statusText,
      data,
    };
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      return error.message;
    }
  }
};

export const submitSigninData = async <T>(values: T) => {
  try {
    const response = await fetch(`${BASE_URL}/users/auth`, {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values)
    });

    const data = response.json();
    return {
      status: response.status,
      ok: response.ok,
      text: response.statusText,
      data
    }
  } catch (error) {
    if(error instanceof Error) {
      return {
        message: error.message,
        stack: error.stack,
        name: error.name
      }
    }
  }
}
