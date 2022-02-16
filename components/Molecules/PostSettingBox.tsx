// 블로그 상세보기 화면에서, 본인이 쓴 게시글일 경우에, 정보 수정 및 삭제를 할수 있는 컴포넌트
import React, { useState } from 'react';
import styled from 'styled-components';
import { Box } from '@/components/Atom';

interface Props {
  updateHandler: () => void;
  deleteHandler: () => void;
}

const PostSettingBox = (props: Props) => {
  const { updateHandler, deleteHandler } = props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box padding={{ top: '30px' }} position="relative">
      <StyledPostSettingText onClick={() => setIsOpen(!isOpen)}>설정</StyledPostSettingText>
      {isOpen && (
        <StyledPostSettingBox>
          <StyledSettingItems onClick={() => updateHandler()}>수정</StyledSettingItems>
          <StyledSettingItems onClick={() => deleteHandler()}>삭제</StyledSettingItems>
        </StyledPostSettingBox>
      )}
    </Box>
  );
};

const StyledPostSettingText = styled.p`
  border: 1px solid #fff;
  color: #fff;
  font-weight: bold;
  padding: 5px 0px;
  width: 100px;
  margin: 0;
  border-radius: 10px;
  font-size: 14px;
  cursor: pointer;
  text-align: center;
`;

const StyledPostSettingBox = styled.div`
  z-index: 100;
  position: absolute;
  margin-top: 10px;
  width: 100px;
  background-color: #fff;
  border: 1px solid rgb(214, 214, 214);
  padding: 5px;
`;

const StyledSettingItems = styled.p`
  font-size: 12px;
  text-align: center;
  cursor: pointer;
  padding: 10px 0px;
  margin: 0;
  &:hover {
    background-color: rgb(248, 248, 248);
  }
`;

export default PostSettingBox;
