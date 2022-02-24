import React from 'react';
import BaseTemplate from '@/components/template/base';
import authorize from '@/hoc/authorize';
import { ContactComponent } from '@/components/Templates';

const Contact = authorize(() => {
  return (
    <BaseTemplate title="contact">
      <ContactComponent />
    </BaseTemplate>
  );
});

export default Contact;
