'use client';

import { ReactNode } from 'react';
import { Footer, Header } from '@/components/Organisms';
import { Box } from '@/components/Atom';

type props = {
  children?: ReactNode;
};
const BaseTemplates = ({ children }: props) => {
  return (
    <Box width={'100%'}>
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

export default BaseTemplates;
