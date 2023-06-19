import Layout from '../components/Layout';
import FormControl from '../components/FormControl';
import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';
import { Link } from 'react-router-dom';
import useSigninFormData from '../hooks/useSigninFormData';

const SignIn = () => {
  const { formik, passwordType, handleTogglePassword } = useSigninFormData();

  return (
    <Layout>
      <div>
        <SectionTitle>Sign in</SectionTitle>
      </div>
      <form
        onSubmit={formik.handleSubmit}
        className='grid w-1/2 mx-auto gap-y-10'
        noValidate
      >
        <div className='space-y-8'>
          <FormControl.fieldSet>
            <FormControl.Input
              type='email'
              placeholder='email'
              id='email'
              {...formik.getFieldProps('email')}
            />
            <FormControl.label htmlFor='email'>Email</FormControl.label>
          </FormControl.fieldSet>
          <FormControl.fieldSet>
            <FormControl.Input
              type={`${passwordType}`}
              id='password'
              placeholder='password'
              {...formik.getFieldProps('password')}
            />
            <FormControl.label htmlFor='password'>Password</FormControl.label>
            <FormControl.ShowPass onClick={handleTogglePassword} />
          </FormControl.fieldSet>
          <Button>Submit</Button>
        </div>
      </form>
      <p className='mt-8 text-sm'>
        If this is your first time, please register{' '}
        <Link
          to='/register'
          className='text-sky-500'
        >
          here.
        </Link>
      </p>
    </Layout>
  );
};

export default SignIn;
