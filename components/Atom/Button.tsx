import React from 'react';
import styled, { css } from 'styled-components';

const sizeStyles = css<{ size: string }>`
  ${(props) =>
    props.size === 'large' &&
    css`
      width: 100%;
    `}
`;
const StyledButton = styled.button`
  background-color: rgb(18, 184, 134);
  color: #ffffff;
  font-weight: bold;
  border: none;
  height: 45px;

  ${sizeStyles}
`;

const Button = ({ children, color, size, ...props }: any) => {
  return (
    <StyledButton {...props} size={size}>
      {children}
    </StyledButton>
  );
};

export default Button;
