import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Head from 'next/head';

import { Provider } from 'mobx-react';
import RootStore from '../stores';
import { configure } from 'mobx';

configure({
	useProxies: 'never',
	enforceActions: 'never',
});

const stores = new RootStore();

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
    render(){
        const { Component, pageProps } = this.props;
        return(
            <Provider {...stores}>
            <Head>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Audiowide&display=swap" rel="stylesheet" />
            </Head>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
            </Provider>
        );
    }
}

export default App;