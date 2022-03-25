import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import useStores from '@/hooks/use-stores';
import { Toaster } from '@/utils/common';
import { Box, Background, HeaderText, Text, IconLink, Form, FormUnderlineInput, FormSubmit, FormTextArea } from '@/components/Atom';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { regExpEmail } from '@/utils/regExp';
import { useForm } from 'react-hook-form';
import { ContactForm } from '@/interfaces/models/contact';
import { useRouter } from 'next/router';
import { UserInfo } from '@/interfaces/models/user';

const ContactComponent = observer((): JSX.Element => {
  const { contactStore, userStore } = useStores();
  const router = useRouter();
  const [receiverUser, setReceiverUser] = useState<UserInfo>();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactForm>();

  useEffect(() => {
    getUser();
    if (!router.query?.receiver) {
      Toaster.showWarning('받는사람이 지정되어있지 않을 시, 관리자에게 전송 됩니다.');
    }

    if (userStore.userInfo) {
      reset({
        name: userStore.userInfo?.name,
        email: userStore.userInfo?.email,
        phone: userStore.userInfo?.phone,
      });
    }
  }, [router.query, userStore.userInfo]);

  const getUser = async (): Promise<void> => {
    try {
      const params = router.query?.receiver ? Number(router.query.receiver) : 1;
      const res = await userStore.getUser(params);
      setReceiverUser(res);
    } catch (err) {
      console.log(err);
    }
  };
  const create = async (data: ContactForm): Promise<void> => {
    try {
      const params = {
        ...data,
        receiverUserId: router.query?.receiver ? Number(router.query.receiver) : 1,
      };
      await contactStore.createContact(params);

      Toaster.showSuccess('메세지가 전송되었습니다.');
      reset({
        message: '',
      });
    } catch (err) {
      console.log(err);
      Toaster.showError('메세지 전송에 실패하였습니다.');
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
            <IconLink href={`mailto:${receiverUser?.email}`}>
              <MailOutlineIcon />
              email
            </IconLink>
          </Box>
          <Text size={22} fontWeight="bold">
            To. {router.query?.receiver ? receiverUser?.name : '관리자'}님
          </Text>
          <Form width="50%" screen={{ size: 1010, calc: '0px' }} onSubmit={handleSubmit(create)}>
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
});

export default ContactComponent;
