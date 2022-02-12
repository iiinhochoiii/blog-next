import React from 'react';
import { HeaderText, Background } from '@/components/Atom';

const MainTop: React.FC = () => {
  return (
    <Background url={'./images/main_background.jpg'}>
      <HeaderText position="relative" textAlign="center">
        최인호의 Dev Blog 입니다.
      </HeaderText>
    </Background>
  );
};

export default MainTop;
