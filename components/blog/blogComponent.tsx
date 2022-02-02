import React from 'react';
import styled from 'styled-components';
import {blogs, pageType} from '../../interfaces/models/blog';
import BlogHeader from './blogHeader';
import BlogContent from './blogContent';
import BlogPage from './blogPage';

interface Props{
    blogs:blogs[];
    title:any;
    loading:boolean;
    page?: pageType;
    pageNum?: string|string[];
}
const BlogComponent: React.FC<Props> = ({blogs, page, title, loading, pageNum}) =>{
    
    return(
        <BlogWrap>
            <BlogBackground style={{backgroundImage:`url(${"./images/blog_background.jpg"})`}}>
                <div>
                    <h1>Blog</h1>
                    <p>This is a personal blog created to document your development knowledge.</p>
                    {title&&<p>keyword: {title}</p>}
                </div>
            </BlogBackground>
            <BlogContainer>
                <BlogHeader />
                <BlogContent 
                    blogs={blogs}
                    loading={loading}
                />
                {
                    !title&&
                    <BlogPage 
                        page={page}
                        pageNum={pageNum}
                    />
                }
            </BlogContainer>
        </BlogWrap>
    );
}

const BlogWrap = styled.div`

`;

const BlogBackground = styled.div`
    height:300px;
    background-size:100% 300px;
    background: no-repeat center;
    position: relative;
    &>div{
        background:rgba(0,0,0,0.3);
        position: absolute;
        top:0;
        bottom:0;
        left:0;
        right:0;
        text-align:center;
        padding-top:100px;
        &>h1{
            margin:0;
            color:#ffffff;
            font-size:42px;
        }
        &>p{
            margin:20px 0px 0px 0px;
            color:#ffffff;
            font-size:18px;
            font-weight:bold;
        }
    }

    @media screen and (max-width: 690px){
        &>div{
            &>h1{
                font-size:24px;
            }
            &>p{
                font-size:16px;
            }
        }
    }
`;

const BlogContainer = styled.div`
    width:980px;
    margin:0 auto;
    max-width:100%;

    @media screen and (max-width:1010px){
        width:calc(100% - 30px);
    }
`;  

export default BlogComponent;