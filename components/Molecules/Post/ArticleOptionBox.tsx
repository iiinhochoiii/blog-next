import { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { Text } from '@/components/Atom';

interface Props extends HTMLAttributes<HTMLDivElement> {
  routeBlog: () => void;
  routeContact: () => void;
  show_status?: string;
  // 로그인한 사용자 본인의 글인지
  isOwner?: boolean;
  // 숨김/삭제 관리 메뉴 노출 여부
  canManage?: boolean;
  hide: (status: boolean) => void;
  deleteBlog?: () => void;
}

const ArticleOptionBox = (props: Props) => {
  const { routeBlog, routeContact, show_status, isOwner, canManage, hide, deleteBlog, ...rest } = props;
  // 숨김/숨김해제는 현재 상태(show_status)를 알 때만 노출
  const canToggleHide = !!canManage && (show_status === 'SHOW_STATUS' || show_status === 'HIDE_STATUS');
  const textProps = {
    textAlign: 'center',
    padding: {
      top: '10px',
      bottom: '10px',
    },
    hover: {
      background: '#e5e5e5',
    },
    style: {
      cursor: 'pointer',
    },
  };

  return (
    <StyledArticleOptionBox {...rest}>
      <Text {...textProps} onClick={() => routeBlog()}>
        작성한 글 보기
      </Text>
      {!isOwner && (
        <Text {...textProps} onClick={() => routeContact()}>
          메세지 보내기
        </Text>
      )}
      {canToggleHide && (
        <Text {...textProps} onClick={() => hide(show_status === 'HIDE_STATUS' ? false : true)}>
          {show_status === 'HIDE_STATUS' ? '숨김해제' : '숨김'}
        </Text>
      )}
      {canManage && (
        <Text
          {...textProps}
          onClick={() => {
            if (deleteBlog) {
              deleteBlog();
            }
          }}
        >
          게시글 삭제
        </Text>
      )}
    </StyledArticleOptionBox>
  );
};

const StyledArticleOptionBox = styled.div`
  position: absolute;
  right: 0;
  width: 100px;
  border: 1px solid #e5e5e5;
  background-color: #fff;
  border-radius: 2px;
  padding: 5px;
  z-index: 100;
`;

export default ArticleOptionBox;
