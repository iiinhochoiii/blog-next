import React from 'react';
import {useEffect} from 'react';
import styled from 'styled-components';
import Parser from 'html-react-parser';
import {blogs} from '../../../stores/blog/types';
import Prism from 'prismjs';
import {DiscussionEmbed} from 'disqus-react';

interface Props{
    blogItem?:blogs;
}
const BlogReadComponent: React.FC<Props> = ({blogItem}) =>{
    useEffect(()=>{
        Prism.highlightAll();
    });
    return(
        <Wrap>
           <Content>
                {blogItem&&Parser(blogItem.content)}
           </Content>
           <Review>
           <DiscussionEmbed
                shortname={"choiblog-1"}
                config={{
                    url: `https://c-tech.gq/blog/${blogItem?.blog_id}`,
                    identifier: "",
                    title: "this page title"
                }}
                />
           </Review>
        </Wrap>

    );
}


const Wrap = styled.div`
    height:100vh;
`;

const Content = styled.div`

`;

const Review = styled.div``;
export default BlogReadComponent;