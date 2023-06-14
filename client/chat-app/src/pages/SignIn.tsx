import { FormEvent, useState } from 'react';
import Layout from '../components/Layout';
import FormControl from '../components/FormControl';
import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';
import { Link } from 'react-router-dom';

interface FormDataTypes {
  email: string;
  password: string;
}

const SignIn = () => {
  const [formData, setFormData] = useState<FormDataTypes>({
    email: '',
    password: '',
  });

  const resetFormData = () => {
    setFormData({ email: '', password: '' });
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleOnSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const response = await fetch('http://localhost:5003/api/v1/users/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    console.log(data);
    console.log(response.status)
    resetFormData();
  };

  return (
    <Layout>
      <SectionTitle>
        Sign in
      </SectionTitle>
      <form
        onSubmit={handleOnSubmit}
        className='w-full'
        noValidate
      >
        <div className='space-y-8'>
          <FormControl.fieldSet>
            <FormControl.Input
              type='email'
              placeholder='email'
              id='email'
              onChange={handleOnChange}
              name='email'
              value={formData.email}
            />
            <FormControl.label htmlFor='email'>Email</FormControl.label>
          </FormControl.fieldSet>
          <FormControl.fieldSet>
            <FormControl.Input
              type='password'
              id='password'
              placeholder='password'
              onChange={handleOnChange}
              name='password'
              value={formData.password}
            />
            <FormControl.label htmlFor='password'>Password</FormControl.label>
          </FormControl.fieldSet>
          <Button>Submit</Button>
        </div>
      </form>
      <p className='text-sm mt-8'>If this is your first time, please register <Link to='/register' className='text-sky-500'>here.</Link></p>
    </Layout>
  );
};

export default SignIn;
