import React from 'react';
import AppLayout from '../components/AppLayout';
import Head from 'next/head';
import SignUpForm from '../components/SignUpForm';

const signup = () => {
  return (
    <AppLayout>
      <Head>
        <title>signup | nodeBird</title>
      </Head>
      <SignUpForm />
    </AppLayout>
  );
};

export default signup;
