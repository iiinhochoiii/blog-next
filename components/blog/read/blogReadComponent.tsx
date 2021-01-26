import React from 'react';
import {useEffect} from 'react';
import styled from 'styled-components';
import Parser from 'html-react-parser';
import {blogs} from '../../../stores/blog/types';
import Prism from 'prismjs';
interface Props{
    blogItem?:blogs;
}
const BlogReadComponent: React.FC<Props> = ({blogItem}) =>{
    useEffect(()=>{
        Prism.highlightAll();
    });
    return(
        <Wrap>
           {blogItem&&Parser(blogItem.content)}
        </Wrap>

    );
}

const Wrap = styled.div`
    height:100vh;
`;
export default BlogReadComponent;