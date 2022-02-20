import React from 'react';
import styled, { css } from 'styled-components';

interface Props {
  children?: React.ReactNode;
  size?: number;
  style?: React.CSSProperties;
  color?: string;
  hover?: {
    color?: string;
  };
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
  fontWeight?: string | number;
  textAlign?: string;
  lineHeight?: string | number;
  screen?: {
    width?: number;
    size?: number;
  };
  onClick?: (e: any) => void;
}
const Text = (props: Props) => {
  const { children, size, style, color, hover, margin, padding, fontWeight, textAlign, lineHeight, screen, onClick } = props;
  return (
    <StyledText
      style={style}
      color={color}
      hover={hover}
      size={size}
      margin={margin}
      padding={padding}
      fontWeight={fontWeight}
      textAlign={textAlign}
      lineHeight={lineHeight}
      screen={screen}
      onClick={onClick}
    >
      {children}
    </StyledText>
  );
};

const StyledText = styled.p<Props>`
  margin-top: ${(props) => props.margin?.top || '0'};
  margin-bottom: ${(props) => props.margin?.bottom || '0'};
  margin-left: ${(props) => props.margin?.left || '0'};
  margin-right: ${(props) => props.margin?.right || '0'};

  padding-top: ${(props) => props.padding?.top || '0'};
  padding-bottom: ${(props) => props.padding?.bottom || '0'};
  padding-left: ${(props) => props.padding?.left || '0'};
  padding-right: ${(props) => props.padding?.right || '0'};

  font-size: ${(props) => (props.size ? `${props.size}px` : '12px')};
  text-align: ${(props) => props.textAlign || 'left'};
  line-height: ${(props) => props.lineHeight && (typeof props.lineHeight === 'string' ? props.lineHeight : `${props.lineHeight}px`)};
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color || '#333'};
  ${(props) => {
    if (props?.screen) {
      return css`
        @media screen and (max-width: ${`${props.screen?.width}px`}) {
          font-size: ${props.screen.size}px;
        }
      `;
    }
  }};
`;

export default Text;
