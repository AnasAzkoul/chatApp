import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import FormControl from '../components/FormControl';
import Button from '../components/Button';
import useRegisterFormData from '../hooks/useRegisterFormData';
import { ThreeDots } from 'react-loader-spinner';
import { useToggleRegisterPasswords } from '../hooks/useTogglePasswords';

const Register = () => {
  const { formik, mutation } = useRegisterFormData();

  const { passwordType, handleTogglePassword, handleToggleConfirmPassword } =
    useToggleRegisterPasswords();

  return (
    <div className='grid grid-cols-2 bg-gray-100'>
      <div className='aspect-h-6 aspect-w-9'>
        <img
          src='./src/assets/register.jpg'
          alt=''
          className='w-full'
        />
      </div>
      <div className='px-6 py-8'>
        {/* title */}
        <div>
          <SectionTitle>Register</SectionTitle>
        </div>

        {/* Form */}
        <form
          className='grid grid-cols-none mx-auto gap-y-10 md:grid-cols-2 md:gap-x-4'
          onSubmit={formik.handleSubmit}
        >
          {/* first name */}
          <FormControl.fieldSet className='md:col-span-1'>
            <FormControl.Input
              type='text'
              placeholder='first name'
              id='firstName'
              className={`${
                formik.errors.firstName &&
                formik.touched.firstName &&
                'border-rose-500'
              }`}
              {...formik.getFieldProps('firstName')}
            />
            <FormControl.label>first name</FormControl.label>{' '}
            {/* Error Message */}
            {formik.errors.firstName && formik.touched.firstName ? (
              <FormControl.errorMessage>
                {formik.errors.lastName}
              </FormControl.errorMessage>
            ) : (
              <></>
            )}
          </FormControl.fieldSet>

          {/* Last Name */}
          <FormControl.fieldSet className='md:col-span-1'>
            <FormControl.Input
              type='text'
              placeholder='last name'
              id='lastName'
              className={`${
                formik.errors.lastName &&
                formik.touched.lastName &&
                'border-rose-500'
              }`}
              {...formik.getFieldProps('lastName')}
            />
            <FormControl.label>last name</FormControl.label>
            {/* Error Message */}
            {formik.errors.lastName && formik.touched.lastName ? (
              <FormControl.errorMessage>
                {formik.errors.lastName}
              </FormControl.errorMessage>
            ) : (
              <></>
            )}
          </FormControl.fieldSet>

          {/* user name */}
          <FormControl.fieldSet className='md:col-span-2'>
            <FormControl.Input
              type='text'
              placeholder='user name'
              id='userName'
              {...formik.getFieldProps('userName')}
              className={`${
                formik.errors.userName &&
                formik.touched.userName &&
                'border-rose-500'
              }`}
            />
            <FormControl.label>user name</FormControl.label>
            {/* Error Message */}
            {formik.errors.userName && formik.touched.userName ? (
              <FormControl.errorMessage>
                {formik.errors.userName}
              </FormControl.errorMessage>
            ) : (
              <></>
            )}
          </FormControl.fieldSet>

          {/* age */}
          <FormControl.fieldSet className='md:col-span-1'>
            <FormControl.Input
              type='text'
              placeholder='age'
              id='age'
              className={`${
                formik.errors.age && formik.touched.age && 'border-rose-500'
              }`}
              {...formik.getFieldProps('age')}
            />
            <FormControl.label>age</FormControl.label> {/* Error Message */}
            {formik.errors.age && formik.touched.age ? (
              <FormControl.errorMessage>
                {formik.errors.age}
              </FormControl.errorMessage>
            ) : (
              <></>
            )}
          </FormControl.fieldSet>

          {/* gender */}
          <FormControl.fieldSet className='md:col-span-1'>
            <FormControl.select
              options={['male', 'female', 'other']}
              placeholder='gender'
              id='gender'
              className={`${
                formik.errors.gender &&
                formik.touched.gender &&
                'border-rose-500'
              }`}
              {...formik.getFieldProps('gender')}
            />
            {/* Error Message */}
            {formik.errors.gender && formik.touched.gender ? (
              <FormControl.errorMessage>
                {formik.errors.gender}
              </FormControl.errorMessage>
            ) : (
              <></>
            )}
          </FormControl.fieldSet>

          {/* email */}
          <FormControl.fieldSet className='md:col-span-2'>
            <FormControl.Input
              type='email'
              placeholder='email'
              id='email'
              className={`${
                formik.errors.email && formik.touched.email && 'border-rose-500'
              }`}
              {...formik.getFieldProps('email')}
            />
            <FormControl.label>email</FormControl.label>
            {/* Error Message */}
            {formik.errors.email && formik.touched.email ? (
              <FormControl.errorMessage>
                {formik.errors.email}
              </FormControl.errorMessage>
            ) : (
              <></>
            )}
          </FormControl.fieldSet>

          {/* password */}
          <FormControl.fieldSet className='md:col-span-2'>
            <FormControl.Input
              type={`${passwordType.password}`}
              placeholder='password'
              id='password'
              className={`${
                formik.errors.password &&
                formik.touched.password &&
                'border-rose-500'
              }`}
              {...formik.getFieldProps('password')}
            />
            <FormControl.label>password</FormControl.label>
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

          {/* confirm password */}
          <FormControl.fieldSet className='md:col-span-2'>
            <FormControl.Input
              type={`${passwordType.confirmPassword}`}
              placeholder='confirmPassword'
              id='confirmPassword'
              className={`${
                formik.errors.confirmPassword &&
                formik.touched.confirmPassword &&
                'border-rose-500'
              }`}
              {...formik.getFieldProps('confirmPassword')}
            />
            <FormControl.label>confirm password</FormControl.label>
            <FormControl.ShowPass onClick={handleToggleConfirmPassword} />
            {/* Error Message */}
            {formik.errors.confirmPassword && formik.touched.confirmPassword ? (
              <FormControl.errorMessage>
                {formik.errors.confirmPassword}
              </FormControl.errorMessage>
            ) : (
              <></>
            )}
          </FormControl.fieldSet>

          {/* submit Button */}
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
                  <span>Sign up</span>
                )}
              </div>
            </Button>
            {mutation.isError ? (
              <FormControl.errorMessage>{}</FormControl.errorMessage>
            ) : (
              <></>
            )}
          </div>
        </form>
        <div className='w-3/4 pt-5 text-left text-gray-400'>
          <p>
            If you are already registered please{' '}
            <Link
              to='/signin'
              className='text-blue-400'
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
