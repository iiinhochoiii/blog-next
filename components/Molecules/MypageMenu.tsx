import React from 'react';
import { Text } from '@/components/Atom';
import styled from 'styled-components';
import { observer } from 'mobx-react';
import { useRouter } from 'next/router';
import useStores from '@/hooks/use-stores';

interface Props {
  width?: string | number;
}
const MypageMenu = observer((props: Props) => {
  const { width } = props;
  const router = useRouter();
  const { userStore } = useStores();

  const textProps = {
    size: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: {
      top: '20px',
      bottom: '20px',
    },
  };
  return (
    <StyledMypageMenu width={width}>
      <Text
        {...textProps}
        onClick={() => router.push(`/mypage/${userStore?.userInfo?.user_id}/blogs`)}
        style={{ cursor: 'pointer', ...(router.pathname.split('/')[3] === 'blogs' && { color: 'rgb(18,184,134)' }) }}
      >
        내가 쓴 글 보기
      </Text>
      <Text
        {...textProps}
        onClick={() => router.push(`/mypage/${userStore?.userInfo?.user_id}/settings`)}
        style={{ cursor: 'pointer', ...(router.pathname.split('/')[3] === 'settings' && { color: 'rgb(18,184,134)' }) }}
      >
        정보 변경
      </Text>
      <Text
        {...textProps}
        onClick={() => router.push(`/mypage/${userStore?.userInfo?.user_id}/contact`)}
        style={{ cursor: 'pointer', ...(router.pathname.split('/')[3] === 'contact' && { color: 'rgb(18,184,134)' }) }}
      >
        전달받은 메세지
      </Text>
      <Text
        {...textProps}
        onClick={() => router.push(`/mypage/${userStore?.userInfo?.user_id}/category`)}
        style={{ cursor: 'pointer', ...(router.pathname.split('/')[3] === 'category' && { color: 'rgb(18,184,134)' }) }}
      >
        블로그 카테고리 설정
      </Text>
    </StyledMypageMenu>
  );
});

const StyledMypageMenu = styled.div<Props>`
  width: ${(props) => props.width && (typeof props.width === 'string' ? props.width : `${props.width}px` || '100%')};
  height: 265px;
  padding: 20px 0;
  background-color: #fff;
  border-radius: 5px;
  text-align: center;
  border: 1px solid #e5e5e5;

  @media screen and (max-width: 1010px) {
    width: 100%;
  }
`;

export default MypageMenu;
