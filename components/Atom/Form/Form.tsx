import React, { InputHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

interface Props extends InputHTMLAttributes<HTMLFormElement> {
  children?: React.ReactNode;
  margin?: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  width?: string | number;
  screen?: {
    size?: number;
    calc?: string;
  };
}

const Form = (props: Props) => {
  return (
    <StyledForm {...props} margin={props.margin}>
      {props.children}
    </StyledForm>
  );
};

const StyledForm = styled.form<Props>`
  margin-top: ${(props) => props.margin?.top || '0'};
  margin-bottom: ${(props) => props.margin?.bottom || '0'};
  margin-left: ${(props) => props.margin?.left || '0'};
  margin-right: ${(props) => props.margin?.right || '0'};
  width: ${(props) => props.width && (typeof props.width === 'string' ? props.width : `${props.width}px` || '100%')};

  ${(props) => {
    if (props.screen) {
      return css`
        @media screen and (max-width: ${`${props.screen.size}px`}) {
          width: ${`calc(100% - ${props.screen.calc})`};
        }
      `;
    }
  }}

  &.-search {
    background-color: #ffffff;
    width: 40%;
    height: 45px;
    border: none;
    border-radius: 10px;
    display: flex;
    padding: 0 10px;

    @media screen and (max-width: 690px) {
      margin: 20px 0px 0px 0px;
      width: 100%;
    }
  }
`;
export default Form;
