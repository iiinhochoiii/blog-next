import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  value?: string;
  id?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  width?: string;
  height?: string | number;
  padding?: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };

  margin?: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
}

const Input = (props: Props): JSX.Element => {
  const { type, id, value, onChange, width, height, padding, margin, placeholder } = props;
  return (
    <InputWrap
      type={type}
      id={id}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      width={width}
      height={height}
      padding={padding}
      margin={margin}
    />
  );
};

const InputWrap = styled.input<Props>`
  outline: none;
  font-size: 12px;
  border-radius: 5px;
  background: none;
  border: 1px solid #333333;
  width: ${(props) => `calc(${props.width} - 25px)`};
  height: ${(props) => `${props.height}px` || '50px'};
  padding-top: ${(props) => props.padding?.top || '0'};
  padding-bottom: ${(props) => props.padding?.bottom || '0'};
  padding-left: ${(props) => props.padding?.left || '0'};
  padding-right: ${(props) => props.padding?.right || '0'};

  margin-top: ${(props) => props.margin?.top || '0'};
  margin-bottom: ${(props) => props.margin?.bottom || '0'};
  margin-left: ${(props) => props.margin?.left || '0'};
  margin-right: ${(props) => props.margin?.right || '0'};
`;

export default Input;
