import React from 'react';
import BaseTemplate from '@/components/template/base';
import ContactContainer from '@/containers/contact/contactContainer';
import authorize from '@/hoc/authorize';

const Contact = authorize(() => {
  return (
    <BaseTemplate title="contact">
      <ContactContainer />
    </BaseTemplate>
  );
});

export default Contact;
