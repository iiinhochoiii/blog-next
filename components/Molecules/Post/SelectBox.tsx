import React, { HTMLAttributes, forwardRef } from 'react';
import styled from 'styled-components';
import { Categories } from '@/interfaces/models/categories';

interface Props extends HTMLAttributes<HTMLSelectElement> {
  options?: Categories[];
}
// eslint-disable-next-line react/display-name
const PostSelectBox = forwardRef<HTMLSelectElement, Props>((props, ref) => {
  return (
    <StyledPostSelectBox {...props} ref={ref}>
      <option value={0}>카테고리 없음</option>
      {props?.options?.map((option) => (
        <option key={option.category_id} value={option.category_id}>
          {option.name}
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
