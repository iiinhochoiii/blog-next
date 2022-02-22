import React from 'react';
import styled from 'styled-components';

interface Props {
  href?: string;
  children?: React.ReactNode;
}
const IconLink = (props: Props) => {
  const { href, children } = props;
  return <StyledIconLink href={href}>{children}</StyledIconLink>;
};

const StyledIconLink = styled.a`
  margin: auto 0;
  color: #4183c4;
  text-decoration: none;
  line-height: 25px;
  display: flex;
  font-size: 18px;
  font-weight: bold;
  width: 100px;
  & > svg {
    margin: auto 5px 0px 0px;
  }

  @media screen and (max-width: 690px) {
    font-size: 16px;
  }
`;
export default IconLink;
