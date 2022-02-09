import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
  size?: string;
  radius?: number;
}
const Button = ({ ...props }: Props) => {
  return (
    <StyledButton {...props} size={props.size} radius={props.radius}>
      {props.children}
    </StyledButton>
  );
};

const StyledButton = styled.button<{ size?: string; radius?: number }>`
  height: 45px;
  cursor: pointer;
  outline: none;
  background-color: rgb(18, 184, 134);
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  border: none;

  width: ${(props) => {
    if (props.size === 'FULL_SIZE') {
      return '100%';
    }
  }};

  border-radius: ${(props) => {
    return `${props.radius}px`;
  }};
`;

export default Button;
