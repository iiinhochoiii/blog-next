import React, {ReactNode} from 'react';
import HeaderContainer from '../../../containers/layout/headerContainer';
import Footer from '../../layout/footer';

import styled from 'styled-components';

type props = {
    children?:ReactNode;
}
const BaseTemplate = ({children}:props) =>{
    return(
        <Wrap>
            <Header>
                <HeaderContainer />
            </Header>
                <Content>
                {children}
                </Content>
            <footer>
                <Footer />
            </footer>
        </Wrap>
    );
}

const Wrap = styled.div`
    width:100%;
`;

const Header = styled.div`
    
`;
const Content = styled.div`

`;
export default BaseTemplate;