import type { Metadata } from 'next';
import { Login } from '@/components/Templates';

export const metadata: Metadata = {
  title: 'Sign in',
};

const LoginPage = () => {
  return <Login />;
};

export default LoginPage;
