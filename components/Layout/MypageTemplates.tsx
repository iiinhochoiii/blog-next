import React, { ReactNode } from 'react';
import Head from 'next/head';
import { Footer, Header } from '@/components/Organisms';
import { Flex, Box } from '@/components/Atom';
import { MypageMenu } from '@/components/Molecules';

type props = {
  children?: ReactNode;
  title?: string;
};
const MypageTemplates = ({ children, title = '' }: props) => {
  return (
    <Box width={'100%'}>
      <Head>
        <title>{title && `${title} -`} Choi Tech Blog</title>
      </Head>
      <Box>
        <Header />
      </Box>
      <Flex
        justify="space-between"
        width={980}
        margin={{ top: '30px', bottom: '30px', left: 'auto', right: 'auto' }}
        screen={{ width: 1010, flexWrap: 'wrap' }}
      >
        <MypageMenu width={'25%'} />
        {children}
      </Flex>
      <footer>
        <Footer />
      </footer>
    </Box>
  );
};

export default MypageTemplates;
