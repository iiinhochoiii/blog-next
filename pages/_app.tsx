import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
	height:100%;
	margin:0;
	padding:0;
	width:100%;
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
            <>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
            </>
        );
    }
}

export default App;