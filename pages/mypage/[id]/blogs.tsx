import React from 'react';
import MypageTemplates from '@/components/Layout/MypageTemplates';
import { MypageBlogComponent } from '@/components/Templates';
import authorize from '@/hoc/authorize';

const MypageContact = authorize(() => {
  return (
    <MypageTemplates title="mypage-contact">
      <MypageBlogComponent />
    </MypageTemplates>
  );
});

export default MypageContact;
