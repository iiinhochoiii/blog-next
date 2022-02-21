import React from 'react';
import { contacts } from '@/interfaces/models/contact';
import moment from 'moment';
import TextTruncate from 'react-text-truncate'; // recommend
import CircularProgress from '@material-ui/core/CircularProgress';
import { Box, Background, HeaderText, Text, Table } from '@/components/Atom';
import { EmptyDataBox } from '@/components/Molecules';

interface Props {
  contacts: contacts[];
  deleteContact?: (contact_id: number) => void;
  loading: boolean;
}
const MypageComponent = (props: Props) => {
  const { contacts, loading } = props;

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

        {contacts.length > 0 ? (
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
                {contacts.map((item) => (
                  <tr key={item.contact_id}>
                    <td>{item.contact_id}</td>
                    <td style={{ textAlign: 'left' }}>
                      <TextTruncate line={1} element="p" truncateText="…" text={item.message} />
                    </td>
                    <td className="td_date">{moment(item.created_at).format('YYYY-MM-DD HH:mm:ss')}</td>
                    <td>보기</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Box>
        ) : (
          <EmptyDataBox>전송된 메세지가 없습니다.</EmptyDataBox>
        )}
      </Box>
    </Box>
  );
};

export default MypageComponent;
