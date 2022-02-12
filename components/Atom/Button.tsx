import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  radius?: string | number;
  onClick?: () => void;
  width?: string | number;
  margin?: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
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

  width: ${(props) => (typeof props.width === 'string' ? props.width : `${props.width}px` || '100%')};
  border-radius: ${(props) => props.radius && (typeof props.radius === 'string' ? props.radius : `${props.radius}px`)};
  margin-top: ${(props) => props.margin?.top || '0'};
  margin-bottom: ${(props) => props.margin?.bottom || '0'};
  margin-left: ${(props) => props.margin?.left || '0'};
  margin-right: ${(props) => props.margin?.right || '0'};
`;

export default Button;
