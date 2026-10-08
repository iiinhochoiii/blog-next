import React from 'react';
import BaseTemplates from '@/components/Layout/BaseTemplates';

const BaseLayout = ({ children }: { children: React.ReactNode }) => {
  return <BaseTemplates>{children}</BaseTemplates>;
};

export default BaseLayout;
