import type { Metadata } from 'next';
import { SignUp } from '@/components/Templates';

export const metadata: Metadata = {
  title: 'Sign up',
};

const JoinPage = () => {
  return <SignUp />;
};

export default JoinPage;
