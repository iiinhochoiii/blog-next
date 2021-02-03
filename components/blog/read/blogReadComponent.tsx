import React from 'react';
import {useEffect} from 'react';
import styled from 'styled-components';
import Parser from 'html-react-parser';
import {blogs} from '../../../stores/blog/types';
import Prism from 'prismjs';
import {DiscussionEmbed} from 'disqus-react';
import moment from 'moment';

interface Props{
    blogItem?:blogs;
}
const BlogReadComponent: React.FC<Props> = ({blogItem}) =>{
    useEffect(()=>{
        Prism.highlightAll();
    });
    return(
        <ReadWrap>
            <BlogBackground>
                    <div>
                        <h1>{blogItem?.title}</h1>
                        <p>{blogItem?.name}</p>
                        <span>{moment(blogItem?.created_at).format("YYYY-MM-DD")}</span>
                    </div>
            </BlogBackground>
           <ReadContainer>
                <ReadContent>
                        {blogItem&&Parser(blogItem.content)}
                </ReadContent>
                <Review>
                <DiscussionEmbed
                        shortname={"choitech-1"}
                        config={{
                            url: `https://c-tech.gq/blog/${blogItem?.blog_id}`,
                            identifier: "",
                            title: "this page title"
                        }}
                        />
                </Review>
           </ReadContainer>
        </ReadWrap>

    );
}


const ReadWrap = styled.div`
    
`;

const BlogBackground = styled.div`
    background-size:cover;
    height:300px;    
    background-image:url("https://imgur.com/e7wPD4t.png");
    
    &>div{
        width:980px;
        max-width:100%;
        margin:0 auto;
        &>h1{
            font-size:26px;
            padding-top:80px;
            margin:0;
            color:#fff;
        }
        &>p{
            margin:0px 0px 10px 0px;
            padding-top:50px;
            font-size:16px;
            font-weight:bold;
            color:#fff;
        }
        &>span{
            font-size:18px;
            font-weight:bold;
            color:#fff;
        }
    }

`;

const ReadContainer = styled.div`
    width:980px;
    max-width:100%;
    margin:0 auto;
`;
const ReadContent = styled.div`
    height:100%;
    margin:30px 0px;
    max-width:100%;
    img{
        width:100%;
    }
`;

const Review = styled.div`

`;
export default BlogReadComponent;