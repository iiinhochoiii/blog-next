import React, { HTMLAttributes, forwardRef } from 'react';
import styled from 'styled-components';
import { PostType } from '@/interfaces/models/blog';

interface Props extends HTMLAttributes<HTMLSelectElement> {
  options?: PostType[];
}
// eslint-disable-next-line react/display-name
const PostSelectBox = forwardRef<HTMLSelectElement, Props>((props, ref) => {
  return (
    <StyledPostSelectBox {...props} ref={ref}>
      {props?.options?.map((option) => (
        <option key={option.id} value={option.value}>
          {option.value}
        </option>
      ))}
    </StyledPostSelectBox>
  );
});

const StyledPostSelectBox = styled.select`
  width: 200px;
  height: 45px;
  border: 1px solid #b4b2b2;
  border-radius: 10px;
  outline: none;
  padding: 0 10px;
`;

export default PostSelectBox;
