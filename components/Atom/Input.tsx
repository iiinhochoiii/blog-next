import React from 'react';
import { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

const Input = (props: InputHTMLAttributes<HTMLInputElement>): JSX.Element => {
  return <InputWrap {...props} />;
};

const InputWrap = styled.input`
  width: calc(100% - 25px);
  height: 50px;
  outline: none;
  padding: 0 10px;
  margin-bottom: 10px;
  font-size: 12px;
  border-radius: 5px;
  background: none;
  border: 1px solid #333333;
`;

export default Input;
