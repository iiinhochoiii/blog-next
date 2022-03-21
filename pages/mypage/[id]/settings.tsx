import React from 'react';
import MypageTemplates from '@/components/Layout/MypageTemplates';
import { MypageSettingsComponent } from '@/components/Templates';
import authorize from '@/hoc/authorize';

const MypageSettings = authorize(() => {
  return (
    <MypageTemplates title="mypage-settings">
      <MypageSettingsComponent />
    </MypageTemplates>
  );
});

export default MypageSettings;
