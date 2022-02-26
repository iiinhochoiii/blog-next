import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react';
import { useRouter } from 'next/router';
import useStores from '@/hooks/use-stores';
import { Toaster } from '@/utils/common';
import moment from 'moment';
import TextTruncate from 'react-text-truncate'; // recommend
import CircularProgress from '@material-ui/core/CircularProgress';
import { Box, Background, HeaderText, Text, Table } from '@/components/Atom';
import { EmptyDataBox } from '@/components/Molecules';
import { contacts } from '@/interfaces/models/contact';
import MypageContactDialog from './Dialog/MypageContactDialog';

const MypageComponent = observer((): JSX.Element => {
  const router = useRouter();
  const { contactStore, userStore } = useStores();
  const [loading, setLoading] = useState(false);
  const [contact, setContact] = useState<contacts>({});
  const [showContactModal, setShowContactModal] = useState(false);

  useEffect(() => {
    search();
  }, []);

  const search = async (): Promise<void> => {
    if (process.browser) {
      if (userStore?.userInfo?.user_id === 1) {
        try {
          setLoading(true);
          const res = await contactStore.getContactList();
          contactStore.setContacts(res.data);
          setLoading(false);
        } catch (err) {
          setLoading(false);
          console.log(false);
        }
      } else {
        router.push('/');
      }
    }
  };
  const deleteContact = async (contact_id: number): Promise<void> => {
    try {
      await contactStore.deleteContact(contact_id);
      Toaster.showSuccess('삭제 되었습니다.');
      search();
    } catch (err) {
      Toaster.showError('삭제하는 중 오류가 발생하였습니다. 데이터를 확인해주세요');
      console.log(err);
    }
  };

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <Box>
      <Background url={'./images/about_background.jpg'} background="no-repeat center" position="relative">
        <Box
          position="absolute"
          backgroundColor="rgba(0, 0, 0, 0.3)"
          textAlign="center"
          padding={{ top: '100px' }}
          style={{ top: 0, bottom: 0, left: 0, right: 0 }}
        >
          <HeaderText textAlign="center" size={42}>
            Mypage
          </HeaderText>
          <Text margin={{ top: '20px' }} size={18} color={'#ffffff'} fontWeight={'bold'} textAlign="center" screen={{ width: 690, size: 16 }}>
            What messages have come?
          </Text>
        </Box>
      </Background>
      <Box width={980} margin={{ top: '30px', bottom: '30px', left: 'auto', right: 'auto' }} screen={{ size: 1010, calc: '30px' }}>
        <HeaderText size={22} fontWeight={400} color="rgb(18, 184, 134)">
          Received Message
        </HeaderText>

        {contactStore.contacts.length > 0 ? (
          <Box>
            <Table>
              <thead>
                <tr>
                  <th style={{ width: '10%' }}>번호</th>
                  <th style={{ width: '60%' }}>내용</th>
                  <th style={{ width: '20%' }}>보낸날짜</th>
                  <th style={{ width: '10%' }}>상세</th>
                </tr>
              </thead>
              <tbody>
                {contactStore?.contacts.map((item, index) => (
                  <tr key={item.contact_id}>
                    <td>{item.contact_id}</td>
                    <td style={{ textAlign: 'left' }}>
                      <TextTruncate line={1} element="p" truncateText="…" text={item.message} />
                    </td>
                    <td className="td_date">{moment(item.created_at).format('YYYY-MM-DD HH:mm:ss')}</td>
                    <td>
                      <Text
                        style={{ cursor: 'pointer' }}
                        textAlign="center"
                        size={14}
                        onClick={() => {
                          setContact(contactStore?.contacts[index]);
                          setShowContactModal(true);
                        }}
                      >
                        보기
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
      </Box>
      {showContactModal && <MypageContactDialog onClose={() => setShowContactModal(false)} contact={contact} />}
    </Box>
  );
});

export default MypageComponent;
