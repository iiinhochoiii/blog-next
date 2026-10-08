'use client';

import { ReactNode } from 'react';
import { Footer, Header } from '@/components/Organisms';
import { Flex, Box } from '@/components/Atom';
import { MypageMenu } from '@/components/Molecules';

type props = {
  children?: ReactNode;
};
const MypageTemplates = ({ children }: props) => {
  return (
    <Box width={'100%'}>
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
