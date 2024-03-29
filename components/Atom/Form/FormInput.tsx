import React, { HTMLAttributes, forwardRef } from 'react';
import styled, { css } from 'styled-components';

interface Props extends HTMLAttributes<HTMLInputElement> {
  style?: React.CSSProperties;
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
  border?: string;
  screen?: number;
  fontSize?: number;
  readonly?: boolean;
  enabled?: boolean; // enterkey에 대한 활성화
  error?: {
    type?: string;
    message?: string;
    ref?: any;
  };
  maxLength?: number;
}

// eslint-disable-next-line react/display-name
const FormInput = forwardRef<HTMLInputElement, Props>((props, ref) => {
  return (
    <>
      <StyledFormInput
        {...props}
        ref={ref}
        readOnly={!!props.readonly}
        onKeyDown={(e) => {
          if (!props.enabled && e.key === 'Enter') {
            e.preventDefault();
          }
        }}
      />
      {props?.error?.message && <StyledErrorText>{props?.error?.message}</StyledErrorText>}
    </>
  );
});

const StyledFormInput = styled.input<Props>`
  outline: none;
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : '12px')};
  border-radius: 5px;
  border: ${(props) => (!props.error ? props.border || '1px solid #333333' : '1px solid #ff0000')};
  width: ${(props) => (props.width ? `calc(${props.width} - 25px)` : 'calc(100% - 25px)')};
  height: ${(props) => (props?.height ? (typeof props.height === 'string' ? props.height : `${props.height}px`) : '50px')};
  padding-top: ${(props) => props.padding?.top || '0'};
  padding-bottom: ${(props) => props.padding?.bottom || '0'};
  padding-left: ${(props) => props.padding?.left || '0'};
  padding-right: ${(props) => props.padding?.right || '0'};

  margin-top: ${(props) => props.margin?.top || '0'};
  margin-bottom: ${(props) => props.margin?.bottom || '0'};
  margin-left: ${(props) => props.margin?.left || '0'};
  margin-right: ${(props) => props.margin?.right || '0'};

  background-color: ${(props) => (props.readOnly ? '#e5e5e5' : '#fff')};
  ${(props) => {
    if (props.screen) {
      return css`
        @media screen and (max-width: ${`${props.screen}px`}) {
          width: calc(100% - 30px);
        }
      `;
    }
  }}
`;

const StyledErrorText = styled.p`
  font-size: 10px;
  color: #ff0000;
  margin: 0px 0px 10px 0px;
`;
export default FormInput;
