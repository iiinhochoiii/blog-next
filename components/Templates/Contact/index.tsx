'use client';

import { Box, Background, HeaderText, Text, IconLink, Form, FormUnderlineInput, FormSubmit, FormTextArea } from '@/components/Atom';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { regExpEmail } from '@/utils/regExp';
import { useContact } from './contact.hook';

const ContactComponent = (): JSX.Element => {
  const { register, errors, onSubmit, receiverEmail, receiverName } = useContact();

  return (
    <Box>
      <Background url={'/images/contact_background.jpg'} background="no-repeat center" position="relative">
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
            <IconLink href={`mailto:${receiverEmail}`}>
              <MailOutlineIcon />
              email
            </IconLink>
          </Box>
          <Text size={22} fontWeight="bold">
            To. {receiverName}님
          </Text>
          <Form width="50%" screen={{ size: 1010, calc: '0px' }} onSubmit={onSubmit}>
            <Box margin={{ bottom: '10px' }}>
              <FormUnderlineInput
                type="text"
                placeholder="보내는 분의 성함을 입력해주세요."
                {...register('name', {
                  required: true,
                })}
                error={errors.name}
              />
            </Box>
            <Box margin={{ bottom: '10px' }}>
              <FormUnderlineInput
                type="text"
                placeholder="이메일을 입력해주세요."
                {...register('email', {
                  required: {
                    value: true,
                    message: '이메일을 입력해주세요.',
                  },
                  pattern: {
                    value: regExpEmail,
                    message: '올바른 형식의 이메일을 입력해주세요.',
                  },
                })}
                error={errors.email}
              />
            </Box>
            <Box margin={{ bottom: '10px' }}>
              <FormUnderlineInput
                type="text"
                placeholder="보내시는 분의 연락처를 입력해주세요."
                maxLength={13}
                {...register('phone', {
                  required: {
                    value: true,
                    message: '연락처를 입력해주세요.',
                  },
                })}
                error={errors.phone}
              />
            </Box>
            <Box margin={{ bottom: '10px' }}>
              <Text margin={{ top: '10px', bottom: '5px' }}>Meassage</Text>
              <FormTextArea
                className="-contact"
                placeholder="보내실 내용을 입력해주세요."
                {...register('message', {
                  required: true,
                })}
                error={errors.message}
              />
            </Box>
            <FormSubmit type="submit" radius={10} width={110} value="보내기" />
          </Form>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactComponent;
