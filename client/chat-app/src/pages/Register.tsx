import { ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import SectionTitle from '../components/SectionTitle';
import FormControl from '../components/FormControl';
import Button from '../components/Button';
import { newUser, NewUserTypes } from '../utils/types';

const Register = () => {
  const [formData, setFormData] = useState<NewUserTypes>({
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    gender: 'male',
    age: '',
    password: '',
    confirmPassword: '',
  });
  const [show, setShow] = useState({ pass: false, cPass: false });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    e.preventDefault();

    const { value, name } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  };

  return (
    <Layout>
      {/* title */}
      <div>
        <SectionTitle>Register</SectionTitle>
      </div>

      {/* Form */}
      <form
        className='grid w-3/4 grid-cols-none mx-auto gap-y-10 md:grid-cols-2 md:gap-x-4'
        onSubmit={handleSubmit}
      >
        {/* first name */}
        <FormControl.fieldSet className='md:col-span-1'>
          <FormControl.Input
            type='text'
            placeholder='first name'
            name='firstName'
            id='firstName'
            value={formData.firstName}
            onChange={handleChange}
          />
          <FormControl.label>first name</FormControl.label>
        </FormControl.fieldSet>

        {/* Last Name */}
        <FormControl.fieldSet className='md:col-span-1'>
          <FormControl.Input
            type='text'
            placeholder='last name'
            name='lastName'
            id='lastName'
            value={formData.lastName}
            onChange={handleChange}
          />
          <FormControl.label>last name</FormControl.label>
        </FormControl.fieldSet>

        {/* user name */}
        <FormControl.fieldSet className='md:col-span-2'>
          <FormControl.Input
            type='text'
            placeholder='user name'
            name='userName'
            id='userName'
            value={formData.userName}
            onChange={handleChange}
          />
          <FormControl.label>user name</FormControl.label>
        </FormControl.fieldSet>

        {/* age */}
        <FormControl.fieldSet className='md:col-span-1'>
          <FormControl.Input
            type='text'
            placeholder='age'
            name='age'
            id='age'
            value={formData.age}
            onChange={handleChange}
          />
          <FormControl.label>age</FormControl.label>
        </FormControl.fieldSet>

        {/* gender */}
        <FormControl.fieldSet className='md:col-span-1'>
          <FormControl.select
            options={['male', 'female', 'other']}
            name='gender'
            placeholder='gender'
            value={formData.gender}
            onChange={handleChange}
          />
        </FormControl.fieldSet>

        {/* email */}
        <FormControl.fieldSet className='md:col-span-2'>
          <FormControl.Input
            type='email'
            placeholder='email'
            name='email'
            id='email'
            value={formData.email}
            onChange={handleChange}
          />
          <FormControl.label>email</FormControl.label>
        </FormControl.fieldSet>

        {/* password */}
        <FormControl.fieldSet className='md:col-span-2'>
          <FormControl.Input
            type='password'
            placeholder='password'
            name='password'
            id='password'
            value={formData.password}
            onChange={handleChange}
          />
          <FormControl.label>password</FormControl.label>
        </FormControl.fieldSet>

        {/* confirm password */}
        <FormControl.fieldSet className='md:col-span-2'>
          <FormControl.Input
            type='password'
            placeholder='confirmPassword'
            name='confirmPassword'
            id='confirmPassword'
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <FormControl.label>confirm password</FormControl.label>
        </FormControl.fieldSet>

        {/* submit Button */}
        <div className='md:col-span-2'>
          <Button className='font-semibold text-gray-100 transition-colors duration-150 ease-in bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-l' >
            Submit
          </Button>
        </div>
      </form>
    </Layout>
  );
};

export default Register;
