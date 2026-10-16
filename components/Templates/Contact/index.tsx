'use client';

import { Box, Background, HeaderText, Text, IconLink, Link, Form, FormUnderlineInput, FormSubmit, FormTextArea } from '@/components/Atom';
import styled from 'styled-components';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { regExpEmail } from '@/utils/regExp';
import { useContact } from './contact.hook';

const ContactComponent = (): JSX.Element => {
  const { register, errors, onSubmit, isAdminContact, isSelf, receiverName, adminEmail, authorBlogPath } = useContact();

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
          {/* 받는 사람 안내 */}
          <StyledRecipientInfo role="note" aria-label="받는 사람 안내">
            <InfoOutlinedIcon />
            <Box>
              <Text size={13} fontWeight="bold" color={INFO_TEXT_COLOR}>
                받는 사람
              </Text>
              <Text size={20} fontWeight="bold" color="#1f3b57" margin={{ top: '4px', bottom: '8px' }}>
                {receiverName}
                {!isAdminContact && ' (작성자)'}
              </Text>
              <Text size={14} lineHeight={22} color="#3d5a75">
                {isAdminContact
                  ? '사이트 이용 문의, 제안, 오류 제보를 보내 주세요. 특정 작성자에게 보내려면 작성자의 글 목록에서 "메세지 보내기"를 이용해 주세요.'
                  : '작성자에게 메세지가 전달됩니다.'}
              </Text>
              {isAdminContact && adminEmail && (
                <Box margin={{ top: '10px' }}>
                  <IconLink href={`mailto:${adminEmail}`}>
                    <MailOutlineIcon />
                    email
                  </IconLink>
                </Box>
              )}
              {authorBlogPath && (
                <Box margin={{ top: '10px' }}>
                  <Link href={authorBlogPath} size={14} hover={{ color: '#0085a1' }} style={{ color: INFO_TEXT_COLOR, fontWeight: 'bold' }}>
                    작성한 글 보기
                  </Link>
                </Box>
              )}
            </Box>
          </StyledRecipientInfo>
          {isSelf && (
            <Text size={14} color="#ff0000" margin={{ top: '10px' }}>
              본인에게는 메세지를 보낼 수 없습니다.
            </Text>
          )}
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
            <FormSubmit type="submit" radius={10} width={110} value="보내기" disabled={isSelf} />
          </Form>
        </Box>
      </Box>
    </Box>
  );
};

// 안내 상자 배경(#eef5fc) 위에서 작은 글자 대비 4.5:1 이상을 만족하는 파란색 (#4183c4 는 3.6:1)
const INFO_TEXT_COLOR = '#3570a8';

// 받는 사람 안내 (info 스타일) — 폼과 같은 폭(50%, 1010px 이하 100%)
const StyledRecipientInfo = styled.div`
  display: flex;
  gap: 12px;
  width: 50%;
  box-sizing: border-box;
  margin-bottom: 20px;
  padding: 16px 20px;
  background-color: #eef5fc;
  border: 1px solid #cfe2f5;
  border-left: 4px solid #4183c4;
  border-radius: 6px;

  & > svg {
    flex-shrink: 0;
    margin-top: 1px;
    color: #4183c4;
  }

  & a {
    color: ${INFO_TEXT_COLOR};
  }

  @media screen and (max-width: 1010px) {
    width: 100%;
  }
`;

export default ContactComponent;
