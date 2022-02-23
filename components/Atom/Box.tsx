import React, { InputHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

interface Props extends InputHTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
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
  textAlign?: string;
  width?: string | number;
  screen?: {
    size?: number;
    calc?: string;
  };
  backgroundColor?: string;
  position?: string;
}
const Box = (props: Props) => {
  const { children, margin, textAlign, width, screen, backgroundColor, position } = props;

  return (
    <StyledBox {...props} margin={margin} textAlign={textAlign} width={width} screen={screen} backgroundColor={backgroundColor} position={position}>
      {children}
    </StyledBox>
  );
};

const StyledBox = styled.div<Props>`
  margin-top: ${(props) => props.margin?.top || '0'};
  margin-bottom: ${(props) => props.margin?.bottom || '0'};
  margin-left: ${(props) => props.margin?.left || '0'};
  margin-right: ${(props) => props.margin?.right || '0'};

  padding-top: ${(props) => props.padding?.top || '0'};
  padding-bottom: ${(props) => props.padding?.bottom || '0'};
  padding-left: ${(props) => props.padding?.left || '0'};
  padding-right: ${(props) => props.padding?.right || '0'};

  text-align: ${(props) => props.textAlign || 'left'};
  width: ${(props) => props.width && (typeof props.width === 'string' ? props.width : `${props.width}px` || '100%')};
  background-color: ${(props) => props.backgroundColor};
  max-width: 100%;
  position: ${(props) => props.position};

  ${(props) => {
    if (props.screen) {
      return css`
        @media screen and (max-width: ${`${props.screen.size}px`}) {
          width: ${`calc(100% - ${props.screen.calc})`};
        }
      `;
    }
  }}

  &.footer {
    @media screen and (max-width: 690px) {
      width: 100%;
      margin-bottom: 5px;
    }
  }

  &.header-after-login {
    &-menu {
      position: absolute;
      z-index: 100;
      margin-top: 10px;
      right: 0;
      width: 100px;
      max-width: 100px;
      border: 1px solid rgb(214, 214, 214);
      background-color: #ffffff;
      padding: 5px;
      & > p {
        text-align: center;
        padding: 10px 0px;
        margin: 0;
        font-size: 12px;
        cursor: pointer;
        &:hover {
          background-color: rgb(248, 248, 248);
        }
      }
    }

    @media screen and (max-width: 690px) {
      display: none;
    }
  }
`;
export default Box;
