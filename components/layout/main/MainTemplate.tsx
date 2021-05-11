import React, {ReactNode} from 'react';
import styled from 'styled-components';

type props = {
    children?:ReactNode;
}

const MainTemplate = ({children}:props) =>{
    return(
        <MainWrap>
            {children}
        </MainWrap>
    );
}

const MainWrap = styled.div`
    height:100%;
`;

export default MainTemplate;