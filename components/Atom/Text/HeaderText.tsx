import React from 'react';
import styled from 'styled-components';

interface Props {
  children?: React.ReactNode;
  size?: number;
  margin?: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  position?: string;
  textAlign?: string;
  color?: string;
  top?: string;
  fontWeight?: number;
}
const HeaderText = (props: Props) => {
  const { children, size, margin, position, textAlign, color, top, fontWeight } = props;
  return (
    <StyledHeaderText size={size} margin={margin} position={position} textAlign={textAlign} color={color} top={top} fontWeight={fontWeight}>
      {children}
    </StyledHeaderText>
  );
};

const StyledHeaderText = styled.h1<Props>`
  margin-top: ${(props) => props.margin?.top || '0'};
  margin-bottom: ${(props) => props.margin?.bottom || '0'};
  margin-left: ${(props) => props.margin?.left || '0'};
  margin-right: ${(props) => props.margin?.right || '0'};
  font-size: ${(props) => `${props.size}px` || '12px'};
  text-align: ${(props) => props.textAlign || 'left'};

  position: ${(props) => props.position};
  color: ${(props) => props.color || '#ffffff'};
  text-align: ${(props) => props.textAlign || 'left'};
  font-weight: ${(props) => props.fontWeight || 'bold'};
  top: ${(props) => props.top || '45%'};

  @media screen and (max-width: 690px) {
    font-size: 24px;
  }
`;
export default HeaderText;
