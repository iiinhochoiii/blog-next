import React from 'react';
import MypageTemplates from '@/components/Layout/MypageTemplates';

const MypageLayout = ({ children }: { children: React.ReactNode }) => {
  return <MypageTemplates>{children}</MypageTemplates>;
};

export default MypageLayout;
