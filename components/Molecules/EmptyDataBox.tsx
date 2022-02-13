import React from 'react';
import styled from 'styled-components';
import { Text } from '@/components/Atom';

interface Props {
  children?: React.ReactNode;
}
const EmptyDataBox = (props: Props) => {
  return (
    <StyledEmptyDataBox>
      <Text lineHeight={100} textAlign="center" size={12}>
        {props.children}
      </Text>
    </StyledEmptyDataBox>
  );
};

const StyledEmptyDataBox = styled.div`
  margin-top: 20px;
  border-top: 1px solid #b4b2b2;
  border-bottom: 1px solid #b4b2b2;
  height: 100px;
`;
export default EmptyDataBox;
