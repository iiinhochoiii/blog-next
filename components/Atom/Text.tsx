import React from 'react';
import styled from 'styled-components';

interface Props {
  children?: React.ReactNode;
}
const Text = (props: Props) => {
  return <TextWrap>{props.children}</TextWrap>;
};

const TextWrap = styled.p`
  margin: 0px 0px 5px 0px;
  font-size: 10px;
`;

export default Text;
