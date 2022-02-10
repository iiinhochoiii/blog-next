import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  value?: string;
  id?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  size?: number;
}

const Input = (props: Props): JSX.Element => {
  const { type, id, value, onChange, size } = props;
  return <InputWrap type={type} id={id} value={value} onChange={onChange} size={size} />;
};

const InputWrap = styled.input<Props>`
  height: 50px;
  outline: none;
  padding: 0 10px;
  margin-bottom: 10px;
  font-size: 12px;
  border-radius: 5px;
  background: none;
  border: 1px solid #333333;
  width: ${(props) => `calc(${props.size}% - 25px)`};
`;

export default Input;
