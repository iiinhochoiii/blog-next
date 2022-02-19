import React from 'react';
import styled, { css } from 'styled-components';

interface Props {
  id?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  width?: string;
  height?: string | number;
  screen?: number;
}
const TextArea = (props: Props) => {
  return <StyledTextArea {...props} />;
};

const StyledTextArea = styled.textarea<Props>`
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
`;
export default TextArea;
