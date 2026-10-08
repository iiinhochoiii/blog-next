import { Modal } from '@/components/Organisms';
import { Form, FormInput, FormSubmit, Text } from '@/components/Atom';
import { regPassword } from '@/utils/regExp';
import { useMypageUpdatePassword } from './update-password.hook';

interface Props {
  onClose: () => void;
}

const MypageUpdatePasswordDialog = (props: Props) => {
  const { onClose } = props;
  const { register, errors, onSubmit, validatePasswordConfirm } = useMypageUpdatePassword(onClose);

  return (
    <Modal title="비밀번호 변경" onClose={onClose} width={600} height={400}>
      <Form onSubmit={onSubmit}>
        <Text size={12} margin={{ top: '10px', bottom: '5px' }}>
          비밀번호
        </Text>
        <FormInput
          type="password"
          placeholder="비밀번호를 입력해 주세요."
          padding={{ left: '10px', right: '10px' }}
          {...register('password', {
            required: {
              value: true,
              message: '비밀번호를 입력해주세요.',
            },
            pattern: {
              value: regPassword,
              message: '영문, 숫자, 특수문자를 포함한 8자리 이상을 입력해주세요.',
            },
          })}
          error={errors.password}
        />

        <Text size={12} margin={{ top: '10px', bottom: '5px' }}>
          비밀번호 확인
        </Text>
        <FormInput
          type="password"
          placeholder="비밀번호 확인"
          padding={{ left: '10px', right: '10px' }}
          {...register('passwordConfirm', {
            required: {
              value: true,
              message: '비밀번호 확인을 입력해주세요.',
            },
            validate: validatePasswordConfirm,
          })}
          error={errors.passwordConfirm}
        />
        <FormSubmit type="submit" value="변경" margin={{ top: '20px' }} radius={5} />
      </Form>
    </Modal>
  );
};

export default MypageUpdatePasswordDialog;
