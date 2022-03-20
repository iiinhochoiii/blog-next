import React from 'react';
import { Text } from '@/components/Atom';
import styled from 'styled-components';

interface Props {
  width?: string | number;
}
const MypageMenu = (props: Props) => {
  const { width } = props;
  const textProps = {
    size: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: {
      top: '20px',
      bottom: '20px',
    },
    style: {
      cursor: 'pointer',
    },
  };
  return (
    <StyledMypageMenu width={width}>
      <Text {...textProps}>내가 쓴 글 보기</Text>
      <Text {...textProps}>비밀번호 변경</Text>
      <Text {...textProps}>전달받은 메세지</Text>
    </StyledMypageMenu>
  );
};

const StyledMypageMenu = styled.div<Props>`
  width: ${(props) => props.width && (typeof props.width === 'string' ? props.width : `${props.width}px` || '100%')};
  position: relative;
  height: 200px;
  padding: 20px 0;
  background-color: #fff;
  border-radius: 5px;
  text-align: center;
  border: 1px solid #e5e5e5;
`;

export default MypageMenu;
