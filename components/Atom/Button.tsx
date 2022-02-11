import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  radius?: number;
  onClick?: () => void;
  width?: string;
}
const Button = ({ ...props }: Props) => {
  return (
    <StyledButton {...props} onClick={props.onClick} radius={props.radius} width={props.width}>
      {props.children}
    </StyledButton>
  );
};

const StyledButton = styled.button<Props>`
  height: 45px;
  cursor: pointer;
  outline: none;
  background-color: rgb(18, 184, 134);
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  border: none;

  width: ${(props) => props.width || '100%'};

  border-radius: ${(props) => {
    return `${props.radius}px`;
  }};
`;

export default Button;
