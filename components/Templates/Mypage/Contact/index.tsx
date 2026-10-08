'use client';

import moment from 'moment';
import TextTruncate from 'react-text-truncate'; // recommend
import CircularProgress from '@material-ui/core/CircularProgress';
import { Box, HeaderText, Text, Table } from '@/components/Atom';
import { EmptyDataBox } from '@/components/Molecules';
import MypageContactDialog from './Dialog/MypageContactDialog';
import { useMypageContact } from './contact.hook';

const MypageContactComponent = (): JSX.Element => {
  const { isLoading, contactList, contact, showContactModal, onOpenContact, onCloseContact, onDelete } = useMypageContact();

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <Box style={{ minHeight: '100vh' }} width={'70%'} screen={{ size: 1010, calc: '0px' }}>
      <HeaderText size={22} fontWeight={400} color="rgb(18, 184, 134)">
        Received Message
      </HeaderText>

      {contactList.length > 0 ? (
        <Box>
          <Table>
            <thead>
              <tr>
                <th style={{ width: '10%' }}>번호</th>
                <th style={{ width: '50%' }}>내용</th>
                <th style={{ width: '20%' }}>보낸날짜</th>
                <th style={{ width: '10%' }}>상세</th>
                <th style={{ width: '10%' }}>삭제</th>
              </tr>
            </thead>
            <tbody>
              {contactList.map((item, index) => (
                <tr key={item.contact_id}>
                  <td>{index + 1}</td>
                  <td style={{ textAlign: 'left' }}>
                    <TextTruncate line={1} element="p" truncateText="…" text={item.message} />
                  </td>
                  <td className="td_date">{moment(item.created_at).format('YYYY-MM-DD HH:mm:ss')}</td>
                  <td>
                    <Text style={{ cursor: 'pointer' }} textAlign="center" size={14} onClick={() => onOpenContact(item)}>
                      보기
                    </Text>
                  </td>
                  <td>
                    <Text style={{ cursor: 'pointer' }} textAlign="center" size={14} onClick={() => onDelete(item.contact_id)}>
                      삭제
                    </Text>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Box>
      ) : (
        <EmptyDataBox>전송된 메세지가 없습니다.</EmptyDataBox>
      )}

      {showContactModal && <MypageContactDialog onClose={onCloseContact} contact={contact} onDelete={onDelete} />}
    </Box>
  );
};

export default MypageContactComponent;
