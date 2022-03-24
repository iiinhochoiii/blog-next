import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { Text } from '@/components/Atom';

interface Props extends HTMLAttributes<HTMLDivElement> {
  routeBlog: () => void;
  routeContact: () => void;
}

const ArticleOptionBox = (props: Props) => {
  const { routeBlog, routeContact } = props;
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
    <StyledArticleOptionBox {...props}>
      <Text {...textProps} onClick={() => routeBlog()}>
        작성한 글 보기
      </Text>
      <Text {...textProps} onClick={() => routeContact()}>
        메세지 보내기
      </Text>
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
