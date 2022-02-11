import React from 'react';
import styled, { css } from 'styled-components';

interface Props {
  children?: React.ReactNode;
  size?: number;
  style?: React.CSSProperties;
  margin?: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  fontWeight?: string | number;
  textAlign?: string;
}
const Text = (props: Props) => {
  return (
    <StyledText style={props.style} size={props.size} margin={props.margin} fontWeight={props.fontWeight} textAlign={props.textAlign}>
      {props.children}
    </StyledText>
  );
};

const StyledText = styled.p<Props>`
  margin-top: ${(props) => props.margin?.top || '0'};
  margin-bottom: ${(props) => props.margin?.bottom || '0'};
  margin-left: ${(props) => props.margin?.left || '0'};
  margin-right: ${(props) => props.margin?.right || '0'};
  font-size: ${(props) => `${props.size}px` || '12px'};
  text-align: ${(props) => props.textAlign || 'left'};
  ${(props) =>
    props.fontWeight &&
    css`
      font-weight: ${props.fontWeight};
    `};
`;

export default Text;
