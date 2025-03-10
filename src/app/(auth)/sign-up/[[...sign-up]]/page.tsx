import { SignUp } from '@clerk/nextjs';

export async function generateMetadata() {
  return {
    title: 'Sign up',
    description:
      'Effortlessly create an account through our intuitive sign-up process.',
  };
}

const SignUpPage = () => <SignUp path={'/sign-up'} />;

export default SignUpPage;
