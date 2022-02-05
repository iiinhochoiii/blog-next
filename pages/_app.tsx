import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Head from 'next/head';

import { Provider } from 'mobx-react';
import { configure } from 'mobx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs';

configure({
	useProxies: 'never',
	enforceActions: 'never',
});

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
	height:100%;
	margin:0;
	padding:0;
	width:100%;
    background-color: rgb(242, 242, 242);
    color:#333333;
	font-family: 'Noto Sans KR', sans-serif;
	font-weight:300;
  }
`;

const theme = {
	colors: {
		primary: '#0070f3',
	},
};

interface Props {
	Component: any;
	pageProps: any;
}

class App extends React.Component<Props>{
    componentDidMount(){
        const style = [
            'padding : 30px 20px',
            'margin : 20px 0',
            'background : rgb(18,184,134)',
            'font-size : 25px',
            'font-weight : bold',
            'text-align : center',
            'color : #ffffff'
        ].join(';');
        if(process.env.NODE_ENV==="production"){
            console.log('%c 안녕하세요. 최인호의 DEV BLOG 입니다!', style);
            console.log('>> https://c-tech.vercel.app');
        }
    }
    render(){
        const { Component, pageProps } = this.props;
        return(
            <Provider>
            <Head>
            <link rel="icon" href="/favicon.ico" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href={`https://fonts.googleapis.com/css2?family=Audiowide&display=swap`} rel="stylesheet" />
            <link
				href={`https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap`}
			    rel="stylesheet"
			></link>
            </Head>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
            <ToastContainer 
                position='top-center'
                autoClose={2000}
                closeOnClick
                hideProgressBar={true}
            />
            </Provider>
        );
    }
}

export default App;