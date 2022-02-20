import React from 'react';
import styled from 'styled-components';
import ContactActivity from './contactActivity';
import { Box, Background, HeaderText, Text } from '@/components/Atom';

type form = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

interface Props {
  createContact: (contact: form) => void;
}

const ContactComponent: React.FC<Props> = ({ createContact }) => {
  return (
    <Box>
      <Background url={'./images/contact_background.jpg'} background="no-repeat center" position="relative">
        <Box
          position="absolute"
          backgroundColor="rgba(0, 0, 0, 0.3)"
          textAlign="center"
          padding={{ top: '100px' }}
          style={{ top: 0, bottom: 0, left: 0, right: 0 }}
        >
          <HeaderText textAlign="center" size={42}>
            Contact
          </HeaderText>
          <Text margin={{ top: '20px' }} size={18} color={'#ffffff'} fontWeight={'bold'} textAlign="center" screen={{ width: 690, size: 16 }}>
            If you have any questions or suggestions, please contact us.
          </Text>
        </Box>
      </Background>
      <Box width={980} margin={{ left: 'auto', right: 'auto' }} screen={{ size: 1010, calc: '30px' }}>
        <ContactActivity createContact={createContact} />
      </Box>
    </Box>
  );
};

export default ContactComponent;
