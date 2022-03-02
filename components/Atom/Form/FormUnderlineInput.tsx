import React, { HTMLAttributes, forwardRef } from 'react';
import styled from 'styled-components';
import { UseFormRegister } from 'react-hook-form';

interface Props extends HTMLAttributes<HTMLInputElement> {
  type?: string;
  id?: string;
  value?: string;
  placeholder?: string;
  maxLength?: number;
  readonly?: boolean;
  enabled?: boolean; // enterkey에 대한 활성화
  error?: {
    type?: string;
    message?: string;
    ref?: any;
  };
}

// eslint-disable-next-line react/display-name
const FormUnderlineInput = forwardRef<HTMLInputElement, Props & ReturnType<UseFormRegister<any>>>((props, ref) => {
  return (
    <StyledFormUnderlineInput
      {...props}
      ref={ref}
      readOnly={!!props.readonly}
      onKeyDown={(e) => {
        if (!props.enabled && e.key === 'Enter') {
          e.preventDefault();
        }
      }}
    />
  );
});

const StyledFormUnderlineInput = styled.input<Props>`
  height: 45px;
  width: calc(100% - 10px);
  background: none;
  outline: none;
  border: none;
  border-bottom: ${(props) => (!props.error ? '1px solid #b4b2b2' : '2px solid #ff0000')};
  padding: 5px;
  font-size: 18px;
  font-weight: bold;

  @media screen and (max-width: 690px) {
    font-size: 14px;
  }
`;
export default FormUnderlineInput;
