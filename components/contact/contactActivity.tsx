import React, { useState } from 'react';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Toaster } from '@/utils/common';
import { Box, HeaderText, IconLink, Text, UnderlineInput, TextArea, Button } from '@/components/Atom';

type form = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

interface Props {
  createContact: (contact: form) => void;
}
const ContactActivity: React.FC<Props> = ({ createContact }) => {
  const regExpEmail = /^[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i; // email 유효성검사
  const regExpPhone = /(01[016789])?[-](\d{4}|\d{3})?[-]\d{4}$/i;

  const [form, setForm] = useState<form>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const textChangeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setForm({ ...form, [id]: value });
    if (form.phone.length === 2 || form.phone.length === 7) {
      setForm({ ...form, [id]: value + '-' });
    }
  };

  const sendHandler = () => {
    if (form.name === '') {
      Toaster.showWarning('보내시는 분 성함을 입력해주세요.');
      document.getElementById('name')?.focus();
    } else if (!regExpEmail.test(form.email)) {
      Toaster.showWarning('이메일을 정확히 입력해주세요.');
      document.getElementById('email')?.focus();
    } else if (!regExpPhone.test(form.phone)) {
      Toaster.showWarning('연락처를 정확히 입력해주세요.');
      document.getElementById('phone')?.focus();
    } else if (form.message === '') {
      Toaster.showWarning('보내실 내용을 입력해주세요.');
      document.getElementById('message')?.focus();
    } else {
      createContact(form);
      setForm({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    }
  };
  return (
    <Box padding={{ bottom: '20px' }}>
      <HeaderText margin={{ top: '30px', bottom: '20px' }} size={26} color="#333">
        Contact
      </HeaderText>
      <Box margin={{ bottom: '10px' }}>
        <IconLink href="mailto:dlsgh120@gmail.com">
          <MailOutlineIcon />
          email
        </IconLink>
      </Box>
      <Box margin={{ bottom: '10px' }}>
        <IconLink href="https://github.com/dlsgh120">
          <GitHubIcon />
          github
        </IconLink>
      </Box>
      <Text size={16} margin={{ top: '10px', bottom: '10px' }}>
        OR
      </Text>
      <Box width="50%" screen={{ size: 1010, calc: '10px' }}>
        <Box margin={{ bottom: '10px' }}>
          <UnderlineInput type="text" id="name" value={form.name} onChange={textChangeHandler} placeholder="보내는 분의 성함을 입력해주세요." />
        </Box>
        <Box margin={{ bottom: '10px' }}>
          <UnderlineInput type="text" id="email" value={form.email} onChange={textChangeHandler} placeholder="이메일을 입력해주세요." />
        </Box>
        <Box margin={{ bottom: '10px' }}>
          <UnderlineInput
            type="text"
            id="phone"
            value={form.phone}
            onChange={textChangeHandler}
            placeholder='보내시는 분의 연락처("-" 포함)를 입력해주세요.'
            maxLength={13}
          />
        </Box>
        <Box margin={{ bottom: '10px' }}>
          <Text margin={{ top: '10px', bottom: '5px' }}>Meassage</Text>
          <TextArea className="-contact" id="message" value={form.message} onChange={textChangeHandler} placeholder="보내실 내용을 입력해주세요." />
        </Box>
        <Button padding={{ top: '10px', bottom: '10px', left: '30px', right: '30px' }} radius={10} onClick={sendHandler}>
          보내기
        </Button>
      </Box>
    </Box>
  );
};

export default ContactActivity;
