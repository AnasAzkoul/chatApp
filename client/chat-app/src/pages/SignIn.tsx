import Layout from '../components/Layout';
import FormControl from '../components/FormControl';
import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';
import { Link } from 'react-router-dom';
import useSigninFormData from '../hooks/useSigninFormData';

const SignIn = () => {
  const { formik, passwordType, handleTogglePassword, loading, errorResponse } =
    useSigninFormData();

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
              className={`${
                formik.errors.email && formik.touched.email
                  ? 'border-rose-500'
                  : ''
              }`}
              {...formik.getFieldProps('email')}
            />
            <FormControl.label htmlFor='email'>Email</FormControl.label>
            {/* Error Message */}
            {formik.errors.email && formik.touched.email ? (
              <FormControl.errorMessage>
                {formik.errors.email}
              </FormControl.errorMessage>
            ) : (
              <></>
            )}
          </FormControl.fieldSet>
          <FormControl.fieldSet>
            <FormControl.Input
              type={`${passwordType}`}
              id='password'
              placeholder='password'
              className={`${
                formik.errors.password && formik.touched.password
                  ? 'border-rose-500'
                  : ''
              }`}
              {...formik.getFieldProps('password')}
            />
            <FormControl.label htmlFor='password'>Password</FormControl.label>
            <FormControl.ShowPass onClick={handleTogglePassword} />
            {/* Error Message */}
            {formik.errors.password && formik.touched.password ? (
              <FormControl.errorMessage>
                {formik.errors.password}
              </FormControl.errorMessage>
            ) : (
              <></>
            )}
          </FormControl.fieldSet>
          <Button>Sign in</Button>
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
