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
  lineHeight?: string | number;
  screen?: {
    width?: number;
    size?: number;
  };
}
const Text = (props: Props) => {
  const { children, size, style, margin, fontWeight, textAlign, lineHeight, screen } = props;
  return (
    <StyledText style={style} size={size} margin={margin} fontWeight={fontWeight} textAlign={textAlign} lineHeight={lineHeight} screen={screen}>
      {children}
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
  line-height: ${(props) => (typeof props.lineHeight === 'string' ? props.lineHeight : `${props.lineHeight}px`)};
  font-weight: ${(props) => props.fontWeight};

  ${(props) => {
    if (props?.screen) {
      return css`
        @media screen and (max-width: ${`${props.screen?.width}px`}) {
          font-size: ${props.screen.size}px;
        }
      `;
    }
  }}
`;

export default Text;
