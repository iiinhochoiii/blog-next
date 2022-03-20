import React from 'react';
import MypageTemplates from '@/components/Layout/MypageTemplates';
import { MypageComponent } from '@/components/Templates';
import authorize from '@/hoc/authorize';

const Mypage = authorize(() => {
  return (
    <MypageTemplates title="mypage">
      <MypageComponent />
    </MypageTemplates>
  );
});

export default Mypage;
