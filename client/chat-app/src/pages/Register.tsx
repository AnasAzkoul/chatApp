import React, { useState, useRef, useEffect } from 'react';
import Layout from '../components/Layout';
import SectionTitle from '../components/SectionTitle';
import FormControl from '../components/FormControl';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { NewUserTypes, newUser } from '../utils/types';

const Register = () => {
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

  return (
    <Layout>
      <SectionTitle>Register</SectionTitle>
      <form
        className='w-full'
        noValidate
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className='space-y-8'>
          <div className='flex gap-2'>
            <FormControl.fieldSet className='basis-1/2'>
              <FormControl.Input
                type='text'
                placeholder='first name'
                id='firstName'
                value={formData.firstName}
                name='firstName'
                onChange={handleOnchange}
              />
              <FormControl.label htmlFor='firstName'>
                First Name
              </FormControl.label>
            </FormControl.fieldSet>
            <FormControl.fieldSet className='basis-1/2'>
              <FormControl.Input
                type='text'
                placeholder='last name'
                id='lastName'
                value={formData.lastName}
                name='lastName'
                onChange={handleOnchange}
              />
              <FormControl.label htmlFor='Last Name'>
                Last Name
              </FormControl.label>
            </FormControl.fieldSet>
          </div>
          <FormControl.fieldSet>
            <FormControl.Input
              type='text'
              placeholder='user Name'
              id='userName'
              value={formData.userName}
              name='userName'
              onChange={handleOnchange}
            />
            <FormControl.label htmlFor='User Name'>User Name</FormControl.label>
          </FormControl.fieldSet>
          <div className='flex gap-2'>
            <FormControl.fieldSet className='basis-1/2'>
              <FormControl.select
                options={['Male', 'Female', 'Other']}
                name='gender'
                id='gender'
                value={formData.gender}
                onChange={handleOnchange}
              />
            </FormControl.fieldSet>
            <FormControl.fieldSet className='basis-1/2'>
              <FormControl.Input
                type='text'
                placeholder='age'
                id='age'
                name='age'
                value={formData.age}
                onChange={handleOnchange}
              />
              <FormControl.label>Age</FormControl.label>
            </FormControl.fieldSet>
          </div>
          <FormControl.fieldSet>
            <FormControl.Input
              type='email'
              placeholder='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleOnchange}
            />
            <FormControl.label htmlFor='email'>Email</FormControl.label>
          </FormControl.fieldSet>
          <FormControl.fieldSet>
            <FormControl.Input
              type='password'
              placeholder='password'
              id='password'
              name='password'
              value={formData.password}
              onChange={handleOnchange}
            />
            <FormControl.label htmlFor='password'>Password</FormControl.label>
          </FormControl.fieldSet>
          <FormControl.fieldSet>
            <FormControl.Input
              type='password'
              placeholder='confirm password'
              id='confirmPassword'
              name='confirmPassword'
              value={formData.confirmPassword}
              onChange={handleOnchange}
            />
            <FormControl.label htmlFor='confirmPassword'>
              Confirm Password
            </FormControl.label>
          </FormControl.fieldSet>
          <Button>Submit</Button>
        </div>
      </form>
      <p className='text-sm mt-8'>
        If you are already registered, please click{' '}
        <Link
          to='/signin'
          className='text-sky-500'
        >
          here.
        </Link>
      </p>
    </Layout>
  );
};

export default Register;
