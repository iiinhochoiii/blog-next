import React from 'react';
import { Modal } from '@/components/Organisms';
import { contacts } from '@/interfaces/models/contact';
import { Text, UnderlineInput, TextArea } from '@/components/Atom';
import moment from 'moment';

interface Props {
  onClose: () => void;
  contact?: contacts;
}
const MypageContactDialog = (props: Props) => {
  const { onClose, contact } = props;
  return (
    <Modal title="Contact 상세보기" onClose={onClose}>
      <Text>글쓴이</Text>
      <UnderlineInput value={contact?.name} readonly={true} />

      <Text>이메일</Text>
      <UnderlineInput value={contact?.email} readonly={true} />

      <Text>전화번호</Text>
      <UnderlineInput value={contact?.phone} readonly={true} />

      <Text>생성 날짜</Text>
      <UnderlineInput value={moment(contact?.created_at).format('YYYY-MM-DD HH:mm:ss')} readonly={true} />

      <Text>내용</Text>
      <TextArea className="-contact" value={contact?.message} readonly={true} />
    </Modal>
  );
};

export default MypageContactDialog;
