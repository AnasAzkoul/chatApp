import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import SectionTitle from '../components/SectionTitle';
import FormControl from '../components/FormControl';
import Button from '../components/Button';
import useRegisterFormData from '../hooks/useFormData';

const Register = () => {
  const {formData, handleOnchange, handleSubmit} = useRegisterFormData()

  return (
    <Layout>
      <SectionTitle>Register</SectionTitle>
      <form
        className='w-full'
        noValidate
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className='grid grid-flow-row gap-y-8'>
          {/* First Name */}
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

            {/* Last Name */}
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
            <FormControl.label htmlFor='Last Name'>Last Name</FormControl.label>
          </FormControl.fieldSet>

          {/* USer Name */}
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

          {/* Gender */}
          <FormControl.fieldSet className='basis-1/2'>
            <FormControl.select
              options={['Male', 'Female', 'Other']}
              name='gender'
              id='gender'
              value={formData.gender}
              onChange={handleOnchange}
            />
          </FormControl.fieldSet>

          {/* Age */}
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

          {/* Email */}
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

          {/* Password */}
          <FormControl.fieldSet className='relative'>
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

          {/* Confirm password */}
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
      <p className='mt-8 text-sm'>
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
