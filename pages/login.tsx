import React from 'react';
import Head from 'next/head';
import { Login } from '@/components/Templates';

const LoginPage = () => {
  return (
    <>
      <Head>
        <title>Sign in - Choi Tech Blog</title>
      </Head>
      <Login />
    </>
  );
};

export default LoginPage;
