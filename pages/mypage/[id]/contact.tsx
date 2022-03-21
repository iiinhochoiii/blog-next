import React from 'react';
import MypageTemplates from '@/components/Layout/MypageTemplates';
import { MypageContactComponent } from '@/components/Templates';
import authorize from '@/hoc/authorize';

const MypageContact = authorize(() => {
  return (
    <MypageTemplates title="mypage-contact">
      <MypageContactComponent />
    </MypageTemplates>
  );
});

export default MypageContact;
