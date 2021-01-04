import React, {ReactNode} from 'react';
import Headers from '../../layout/header';
import Footer from '../../layout/footer';

import styled from 'styled-components';

type props = {
    children?:ReactNode;
}
const BaseTemplate = ({children}:props) =>{
    return(
        <Wrap>
            <Header>
                <Headers />
            </Header>
                {children}
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
export default BaseTemplate;