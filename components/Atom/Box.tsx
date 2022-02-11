import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

interface Props extends InputHTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  margin?: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  textAlign?: string;
  width?: string;
}
const Box = (props: Props) => {
  const { children, margin, textAlign, width } = props;

  return (
    <StyledBox {...props} margin={margin} textAlign={textAlign} width={width}>
      {children}
    </StyledBox>
  );
};

const StyledBox = styled.div<Props>`
  margin-top: ${(props) => props.margin?.top || '0'};
  margin-bottom: ${(props) => props.margin?.bottom || '0'};
  margin-left: ${(props) => props.margin?.left || '0'};
  margin-right: ${(props) => props.margin?.right || '0'};

  text-align: ${(props) => props.textAlign || 'left'};
  width: ${(props) => props.width || '100%'};
`;
export default Box;