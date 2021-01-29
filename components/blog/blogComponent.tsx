import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import Link from 'next/link';
import {blogs} from '../../stores/blog/types';
import CircularProgress from '@material-ui/core/CircularProgress';

interface Props{
    blogs:blogs[];
    query:any;
    loading:boolean;
}
const BlogComponent: React.FC<Props> = ({blogs, query, loading}) =>{
    return(
        <BlogWrap>
            <BlogBackground style={{backgroundImage:`url(${'./images/blogBackground.png'})`}}>
                <div>
                    <h1>Blog</h1>
                    <p>Front-end 프레임워크인 React에 관련된 기술 및 경험을 공유 합니다.</p>
                    {query&&<p>keyword: {query}</p>}
                </div>
            </BlogBackground>
            <BlogContainer>
                <div className="content_header">
                    <h1>Related Posts</h1>
                </div>
                <BlogContent>
                        {
                            loading?
                            <CircularProgress />
                            :
                            blogs.length>0?
                            <div className="blog_content">
                                {
                                blogs.reverse().map((item)=>
                                <Link href="/blog/[id]" as={`/blog/${item.blog_id}`}  key={item.blog_id}>
                                    <a>
                                        <article>
                                            <h2>{item.title}</h2>
                                            <span>{moment(item.created_at).format("YYYY.MM.DD")}</span>
                                            <p>
                                                {item.summary}
                                            </p>
                                            <div>
                                                <div><p>{item.name.slice(1, item.name.length)}</p></div>
                                                <p>{item.name}</p>
                                            </div>
                                        </article>
                                    </a>
                                </Link>
                                )
                            }
                            </div>:
                            <div className="blog_content_none_data">
                                <p>작성된 게시글이 없습니다.</p>
                            </div>
                        }
                </BlogContent>
            </BlogContainer>
        </BlogWrap>
    );
}

const BlogWrap = styled.div`

`;

const BlogBackground = styled.div`
    height:500px;
    background-size:100% 500px;
    &>div{
        width:1080px;
        margin:0 auto;
        position: relative;
        padding-top:250px;
        &>h1{
            margin:0;
            color:#ffffff;
            font-size:42px;
        }
        &>p{
            margin:20px 0px 0px 0px;
            color:#ffffff;
            font-size:18px;
        }
    }
`;

const BlogContainer = styled.div`
    width:1080px;
    margin:0 auto;
    max-width:100%;

    &>.content_header{
        margin-top:20px;
        display:flex;
        justify-content:space-between;
        &>h1{
            margin:0;
        }
        &>a{
            color:#333333;
            text-decoration:none;
            margin:auto 0px 0px 0px;
            cursor: pointer;
            font-size:14px;
            &:hover{
                font-weight:bold;
            }
        }
    }
`;  
const BlogContent = styled.div`
    margin:30px 0px 100px 0px;
    &>.blog_content{
        width:100%;
        &>a{
            color:#333333;
            text-decoration:none;
            &>article{
                background-color:#ffffff;
                padding:20px;
                margin-top:20px;
                cursor: pointer;

                &>div{
                    display:flex;
                    &>div{
                        width:35px;
                        height:35px;
                        border-radius:50%;
                        background-color:#3C5087;
                        display:flex;
                        &>p{
                            margin:auto;
                            font-size:11px;
                            color:#ffffff;
                            font-weight:500;
                        }
                    }
                    &>p{
                        margin:auto 0px auto 10px;
                    }
                }
            }
        }
    }

    &>.blog_content_none_data{
        margin-top:20px;
        border-top:1px solid #b4b2b2;
        border-bottom:1px solid #b4b2b2;
        height:100px;
        &>p{
            margin:0;
            line-height:100px;
            text-align:center;
            font-size:12px;
        }
    }

`;
export default BlogComponent;