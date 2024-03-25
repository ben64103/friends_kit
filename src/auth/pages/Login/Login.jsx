import { Form, Formik } from 'formik';

import InputField from '@/components/common/InputField';
import AuthContainer from '@/auth/components/AuthContainer';
import FakeNavigation from '@/auth/components/FakeNavigation';

import loginIlustrLight from '@/assets/images/login/illustration-light.svg';
import RememberMe from '@/components/login/RememberMe';
import ForgotPassword from '@/components/login/ForgotPassword';
import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
// import loginIlustrDark from '@/assets/images/login/illustration-dark.svg';

const Login = () => {
  return (
    <AuthContainer>
      <FakeNavigation />
      <section className='p-2' style={{ height: 'calc(100vh - 100px)' }}>
        <div className='flex-center max-w-[1140px] w-full h-full mx-auto'>
          <img
            src={loginIlustrLight}
            className='max-w-[620px]'
            alt='login-illustration'
          />
          <aside className='w-1/2'>
            <div>
              <h2 className='text-[1.5rem] font-montserrat font-normal'>Welcome back</h2>
              <small>Enter your credentials to sign in.</small>
            </div>
            <Formik
              initialValues={{ email: '', password: '' }}
              onSubmit={(values) => console.log(values)}>
              <Form>
                <section className='inputs w-3/4 mt-4 space-y-2'>
                  <div>
                    <InputField
                      type='email'
                      name='email'
                      label='Email'
                      placeholder='Enter your email address'
                    />
                    <InputField
                      type='password'
                      name='password'
                      label='Password'
                      placeholder='Enter your password'
                    />
                  </div>
                  <ForgotPassword />
                  <Button className='my-3 bg-blue-600' fullWidth>
                    Login
                  </Button>
                  <div className='text-center'>
                    <Link
                      to='/signup'
                      className='text-sm text-gray-500 hover:text-blue-500'>
                      Don't have an account? Sign Up
                    </Link>
                  </div>
                </section>
              </Form>
            </Formik>
          </aside>
        </div>
      </section>
    </AuthContainer>
  );
};

export default Login;
