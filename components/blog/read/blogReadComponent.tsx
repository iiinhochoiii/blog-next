import React from 'react';
import styled from 'styled-components';
import Parser from 'html-react-parser';
import 'prismjs';
const BlogReadComponent: React.FC = () =>{
    const code:any = `
    <ol> <li>test</li> </ol> <pre class="lang-js"><code data-language="js">import React from 'react'; 
    console.log('test'); </code></pre>`;
    return(
        <Wrap>
            {Parser(code)}
        </Wrap>

    );
}

const Wrap = styled.div`
    height:100vh;
`;
export default BlogReadComponent;