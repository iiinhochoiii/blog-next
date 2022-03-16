import React from 'react';
import Modal from 'react-modal';
import { Flex, HeaderText, Button, Box } from '@/components/Atom';
import styled from 'styled-components';

interface Props {
  children?: React.ReactNode;
  title?: string;
  onClose: () => void;
  header?: React.ReactNode;
  width?: string | number;
  height?: string | number;
}
const ModalComponent = (props: Props) => {
  const { children, title, onClose, header, width, height } = props;

  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0,0,0,0.8)',
      zIndex: 500,
    },
  };

  return (
    <StyledModal isOpen={true} ariaHideApp={false} style={customStyles} width={width} height={height}>
      <Flex justify="space-between" className="modal_header">
        <HeaderText color="#333" size={22} margin={{ top: '10px' }}>
          {title}
        </HeaderText>
        <Box>
          {header}
          <Button onClick={onClose} width={80} radius={5}>
            닫기
          </Button>
        </Box>
      </Flex>
      <Box margin={{ top: '20px' }}>{children}</Box>
    </StyledModal>
  );
};

const StyledModal = styled(Modal)<Props>`
  position: absolute;
  inset: 40px 40px 40px 0px;
  border: 1px solid rgb(204, 204, 204);
  background: rgb(255, 255, 255);
  overflow: hidden;
  border-radius: 4px;
  outline: none;
  padding: 10px;
  margin: auto;
  width: ${(props) => (props.width ? `${props.width}px` : '800px')};
  height: ${(props) => (props.height ? `${props.height}px` : '800px')};

  @media screen and (max-width: 1010px) {
    width: 600px;
    height: 600px;
  }

  @media screen and (max-width: 690px) {
    width: 400px;
    height: 400px;
  }
`;
export default ModalComponent;
