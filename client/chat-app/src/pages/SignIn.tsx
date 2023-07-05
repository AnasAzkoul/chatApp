import Layout from '../components/Layout';
import FormControl from '../components/FormControl';
import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';
import { Link } from 'react-router-dom';
import useSigninFormData from '../hooks/useSigninFormData';
import { useToggleSigninPassword } from '../hooks/useTogglePasswords';
import { Navigate } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';

const SignIn = () => {
  const { formik, mutation } = useSigninFormData();

  const { passwordType, handleTogglePassword } = useToggleSigninPassword();

  return (
    <>
      <div className='grid grid-cols-2 bg-gray-100'>
        <div className='aspect-h-5 aspect-w-4'>
          <img
            src='./src/assets/chat.jpg'
            className='w-full'
          />
        </div>
        <div className='px-6 py-8'>
          <div>
            <SectionTitle>Sign in</SectionTitle>
          </div>
          <form
            onSubmit={(e) => formik.handleSubmit(e)}
            className='grid mx-auto gap-y-10'
            noValidate
          >
            <div className='space-y-8'>
              {/* Email */}
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

              {/* Password */}
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
                <FormControl.label htmlFor='password'>
                  Password
                </FormControl.label>
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
              {/* Submit Button */}
              <div className='md:col-span-2'>
                <Button className='font-semibold text-white transition-colors duration-150 ease-in bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-l'>
                  <div className='flex justify-center w-full gap-4'>
                    {mutation.isLoading ? (
                      <ThreeDots
                        height='30'
                        width='30'
                        radius='9'
                        color='#E0E0E0'
                        ariaLabel='three-dots-loading'
                      />
                    ) : (
                      <span>Sign in</span>
                    )}
                  </div>
                </Button>
                {mutation.isError ? (
                  <FormControl.errorMessage>{}</FormControl.errorMessage>
                ) : (
                  <></>
                )}
              </div>
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
        </div>
      </div>
    </>
  );
};

export default SignIn;
