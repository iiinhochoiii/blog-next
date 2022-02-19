import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { postType } from '@/utils/post';

interface Props {
  type: string;
  setType: Dispatch<SetStateAction<string>>;
}
const PostSelectBox = (props: Props) => {
  const { type, setType } = props;

  const change = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;

    setType(value);
  };
  return (
    <StyledPostSelectBox value={type} id="type" onChange={change}>
      {postType.map((type) => (
        <option key={type.id} value={type.value}>
          {type.value}
        </option>
      ))}
    </StyledPostSelectBox>
  );
};

const StyledPostSelectBox = styled.select`
  width: 200px;
  height: 45px;
  border: 1px solid #b4b2b2;
  border-radius: 10px;
  outline: none;
  padding: 0 10px;
`;
export default PostSelectBox;
