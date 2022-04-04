import React, { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  radius?: string | number;
  onClick?: () => void;
  width?: string | number;
  height?: string | number;
  margin?: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  padding?: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  backgroundColor?: string;
  size?: number;
  color?: string;
  fontWeight?: number;
  className?: string;
  disabled?: boolean;
}
const Button = (props: Props) => {
  const { children } = props;
  return (
    <StyledButton {...props} type="button">
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button<Props>`
  cursor: ${(props) => !props.disabled && 'pointer'};
  outline: none;
  border: none;

  color: ${(props) => props.color || '#ffffff'};
  font-size: ${(props) => (props?.size ? `${props?.size}px` : '16px')};
  font-weight: ${(props) => props?.fontWeight || 'bold'};
  background-color: ${(props) => props.backgroundColor || 'rgb(18, 184, 134)'};
  width: ${(props) => (props.width && typeof props.width === 'string' ? props.width : `${props.width}px` || '100%')};
  border-radius: ${(props) => props.radius && (typeof props.radius === 'string' ? props.radius : `${props.radius}px`)};

  margin-top: ${(props) => props.margin?.top || '0'};
  margin-bottom: ${(props) => props.margin?.bottom || '0'};
  margin-left: ${(props) => props.margin?.left || '0'};
  margin-right: ${(props) => props.margin?.right || '0'};

  padding-top: ${(props) => props.padding?.top || '0'};
  padding-bottom: ${(props) => props.padding?.bottom || '0'};
  padding-left: ${(props) => props.padding?.left || '0'};
  padding-right: ${(props) => props.padding?.right || '0'};

  ${(props) => {
    let height = '45px';
    if (props.height) {
      if (typeof props.height === 'string') {
        height = props.height;
      } else {
        height = `${props.height}px`;
      }
    }

    return css`
      height: ${height};
    `;
  }}

  &.-btn_post_article {
    padding: 5px 10px;
    font-weight: 200;
    color: #333333;
    background-color: rgb(229, 229, 229);
    font-size: 12px;
    height: 25px;
  }
`;

export default Button;
