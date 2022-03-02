import React, { HTMLAttributes, forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { UseFormRegister } from 'react-hook-form';

interface Props extends HTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  id?: string;
  value?: string;
  width?: string;
  height?: string | number;
  screen?: number;
  placeholder?: string;
  readonly?: boolean;
  enabled?: boolean; // enterkey에 대한 활성화
  error?: {
    type?: string;
    message?: string;
    ref?: any;
  };
}

// eslint-disable-next-line react/display-name
const FormTextArea = forwardRef<HTMLTextAreaElement, Props & ReturnType<UseFormRegister<any>>>((props, ref) => {
  return <StyledFormTextArea {...props} ref={ref} readOnly={!!props.readonly} />;
});

const StyledFormTextArea = styled.textarea<Props>`
  outline: none;
  padding: 10px;
  resize: none;
  border: 1px solid #b4b2b2;
  border-radius: 5px;
  width: ${(props) => `calc(${props.width} - 25px)`};
  height: ${(props) => (props?.height ? (typeof props.height === 'string' ? props.height : `${props.height}px`) : '50px')};

  ${(props) => {
    if (props.screen) {
      return css`
        @media screen and (max-width: ${`${props.screen}px`}) {
          width: calc(100% - 30px);
        }
      `;
    }
  }}

  &.-contact {
    margin-top: 5px;
    width: calc(100% - 10px);
    height: 300px;
    background: none;
    border: ${(props) => (!props.error ? '1px solid #b2b2b2' : '2px solid #ff0000')};
    resize: none;
    padding: 5px;
    font-size: 18px;
    font-weight: bold;

    @media screen and (max-width: 690px) {
      font-size: 14px;
    }
  }
`;

export default FormTextArea;
