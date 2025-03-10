import { SignIn } from '@clerk/nextjs';

export async function generateMetadata() {
  return {
    title: 'Sign in',
    description:
      'Seamlessly sign in to your account with our user-friendly login process.',
  };
}

const SignInPage = () => <SignIn path="/sign-in" />;

export default SignInPage;
