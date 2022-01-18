import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import {blogs} from '../../../interfaces/models/blog';
import { CircularProgress } from '@material-ui/core';
import TextTruncate from 'react-text-truncate'; // recommend
import moment from 'moment';
import Router from 'next/router';
interface Props{
    blogs:blogs[];
    loading:boolean;
}
const LatestPosts: React.FC<Props> = ({blogs, loading}) =>{

    const moveBlogTypeHandler = (type:string) =>{
       Router.push({
           pathname:"/blog",
           query:{
               "title":type
           }
       })
    }
    return(
        <PostsWrap>
            <PostsContainer>
                <PostsHeader>
                    <h1>Recently Posts</h1>
                </PostsHeader>
                {loading?<CircularProgress />:
                <PostsContent>
                {blogs.map((item,index)=>
                index<3&&
                    <article key={item.blog_id}>
                        <Link href="/blog/[id]" as={`/blog/${item.blog_id}`}>
                            <a>
                                <h4>{item.title}</h4>
                                <p>
                                <TextTruncate
                                    line={2}
                                    element="span"
                                    truncateText="…"
                                text={item.summary}
                                />
                                </p>
                            </a>
                        </Link>
                        <span onClick={()=>moveBlogTypeHandler(item.blog_type)}># {item.blog_type}</span>
                        <div>
                            <p className="blog_date">{moment(item.created_at).format("YYYY-MM-DD")}</p>
                            <p className="blog_writer">{item.name}</p>
                        </div>
                    </article>
                    
                )}
            </PostsContent>
            }
             <MoreContent>
                 <Link href="/blog">
                    <a>더보기</a>
                 </Link>
            </MoreContent>
            </PostsContainer>
        </PostsWrap>
    );
}

const PostsWrap = styled.div`
    margin:100px 0px 0px 0px;
    background-color:rgb(248,248,248);
`;

const PostsContainer = styled.div`  
        padding:50px 0px 100px 0px;
        width:980px;
        margin: 0 auto;
        max-width:100%;

        @media screen and (max-width:1010px){
            width:calc(100% - 30px);
        }
`;

const PostsHeader = styled.div`
    &>h1{
        font-size:26px;
        font-weight:400;
        color:rgb(18, 184, 134);
        margin:0;
    }

    @media screen and (max-width: 690px){
        &>h1{
            font-size:22px;
        }
    }
`;

const PostsContent = styled.div`
    margin:20px 0px 0px 0px;
    &>article{
            border-bottom:1px solid #b4b2b2;
            padding:15px 0px;
            &>a{
                cursor: pointer;
                text-decoration:none;
                color:#333333;
                &:hover{
                    &>h4, p{
                        color:#0085A1;
                    }
                }
                &>h4{
                    font-size:22px;
                    font-weight:400;
                    margin:10px 0px;
                }
                &>p{
                    margin:0px 0px 10px 0px;
                    font-size:18px;
                    line-height:30px;
                }
            }
            &>span{
                font-size:12px;
                border-radius:10px;
                background-color:#e5e5e5;
                padding:5px 10px;
                cursor: pointer;
            }
            
            &>div{
                display:flex;
                justify-content:space-between;
                margin:15px 0px 0px 0px;
                &>p{
                    margin:0px;
                    font-size:14px;
                }
            }
        }

    @media screen and (max-width: 690px){
        &>article{
            &>a{
                &>h4{
                    font-size:18px;
                }
                &>p{
                    font-size:16px;
                }
            }
        }
    }
`;

const MoreContent = styled.div`
    display:flex;
    margin:30px 0px 0px 0px;
    &>a{
        margin-left:auto;
        text-decoration:none;
        background-color:rgb(18, 184, 134);
        width:150px;
        height:40px;
        line-height:40px;
        text-align:center;
        color:#fff;
        font-weight:bold;
    }
`;
export default LatestPosts;