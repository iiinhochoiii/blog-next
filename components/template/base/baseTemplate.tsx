import React, { ReactNode } from 'react';
import Head from 'next/head';
import { Footer, Header } from '@/components/Organisms';
import { Box } from '@/components/Atom';

type props = {
  children?: ReactNode;
  title?: string;
};
const BaseTemplate = ({ children, title }: props) => {
  return (
    <Box width={'100%'}>
      <Head>
        <title>{title === '' ? '' : `${title} -`} Choi Tech Blog</title>
      </Head>
      <Box>
        <Header />
      </Box>
      <Box>{children}</Box>
      <footer>
        <Footer />
      </footer>
    </Box>
  );
};

export default BaseTemplate;
