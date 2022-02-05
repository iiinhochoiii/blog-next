import React, {ReactNode} from 'react';
import HeaderContainer from '@/containers/layout/headerContainer';
import Footer from '@/components/layout/footer';
import styled from 'styled-components';
import Head from 'next/head';

type props = {
    children?:ReactNode;
    title?:string;
}
const BaseTemplate = ({children, title}:props) =>{
    return(
        <Wrap>
            <Head>
                <title>{title===""?"":`${title} -`} Choi Tech Blog</title>
            </Head>
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