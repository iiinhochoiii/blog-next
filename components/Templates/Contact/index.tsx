import React, { useState } from 'react';
import { observer } from 'mobx-react';
import useStores from '@/hooks/use-stores';
import { Toaster } from '@/utils/common';
import { Box, Background, HeaderText, Text, IconLink, UnderlineInput, TextArea, Button } from '@/components/Atom';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import GitHubIcon from '@material-ui/icons/GitHub';
import { regExpEmail, regExpPhone } from '@/utils/regExp';

interface Form {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactComponent = observer((): JSX.Element => {
  const { contactStore } = useStores();
  const [form, setForm] = useState<Form>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const createContact = async (contact: { name: string; email: string; phone: string; message: string }): Promise<void> => {
    try {
      await contactStore.createContact(contact);
      Toaster.showSuccess('메세지가 전송되었습니다.');
    } catch (err) {
      Toaster.showError('메세지 전송에 실패하였습니다.');
    }
  };

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
          <Box width="50%" screen={{ size: 1010, calc: '0px' }}>
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
      </Box>
    </Box>
  );
});

export default ContactComponent;
