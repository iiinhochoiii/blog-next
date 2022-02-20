import React from 'react';
import styled from 'styled-components';

interface Props {
  type?: string;
  id?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder?: string;
  maxLength?: number;
}

const UnderlineInput = (props: Props) => {
  return <StyledUnderlineInput {...props} />;
};

const StyledUnderlineInput = styled.input<Props>`
  height: 45px;
  width: 100%;
  background: none;
  outline: none;
  border: none;
  border-bottom: 1px solid #b4b2b2;
  padding: 5px;
  font-size: 18px;
  font-weight: bold;

  @media screen and (max-width: 690px) {
    font-size: 14px;
  }
`;
export default UnderlineInput;
