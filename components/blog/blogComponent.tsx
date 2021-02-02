import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import Link from 'next/link';
import {blogs} from '../../stores/blog/types';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextTruncate from 'react-text-truncate';

interface Props{
    blogs:blogs[];
    query:any;
    loading:boolean;
}
const BlogComponent: React.FC<Props> = ({blogs, query, loading}) =>{
    return(
        <BlogWrap>
            <BlogBackground style={{backgroundImage:`url(${"./images/blog_background.jpg"})`}}>
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
                                    <h4>{item.title}</h4>
                                    <p>
                                    <TextTruncate
                                        line={2}
                                        element="span"
                                        truncateText="…"
                                    text={item.summary}
                                    />
                                    </p>
                                    <span># {item.blog_type}</span>
                                    <div>
                                        <p className="blog_date">{moment(item.created_at).format("YYYY-MM-DD")}</p>
                                        <p className="blog_writer">{item.name}</p>
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
    background-size:cover;
    height:300px;
    &>div{
        padding-top:100px;
        width:980px;
        margin:0 auto;
        position: relative;
        &>h1{
            margin:0;
            color:#333333;
            font-size:42px;
        }
        &>p{
            margin:20px 0px 0px 0px;
            color:#333333;
            font-size:18px;
            font-weight:bold;
        }
    }
`;

const BlogContainer = styled.div`
    width:980px;
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
                border-bottom:1px solid #b4b2b2;
                cursor: pointer;
                padding:15px 0px;
                &>h4{
                    font-size:22px;
                    font-weight:bold;
                    margin:5px 0px;
                }
                &>p{
                    margin:0px 0px 5px 0px;
                    font-size:18px;
                    line-height:30px;
                }
                &>span{
                    font-size:12px;
                    border-radius:10px;
                    background-color:#e5e5e5;
                    padding:5px 10px;
                }
                
                &>div{
                    display:flex;
                    justify-content:space-between;
                    margin:10px 0px 0px 0px;
                    &>p{
                        margin:0px;
                        font-size:14px;
                    }
                }
                &:hover{
                    &>h4{
                        text-decoration:underline;
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