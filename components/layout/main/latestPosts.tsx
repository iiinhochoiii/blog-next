import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {blogs} from '../../../stores/blog/types';
import { CircularProgress } from '@material-ui/core';
import TextTruncate from 'react-text-truncate'; // recommend
import moment from 'moment';

interface Props{
    blogs:blogs[];
    loading:boolean;
}
const LatestPosts: React.FC<Props> = ({blogs, loading}) =>{
    return(
        <PostsWrap>
            <PostsContainer>
                <PostsHeader>
                    <h1>Lastst Posts</h1>
                    <Link href="/blog">
                        <a>more</a>
                    </Link>
                    <ArrowForwardIosIcon />
                </PostsHeader>
                {loading?<CircularProgress />:
                <PostsContent>
                {blogs.reverse().map((item,index)=>
                index<3&&
                <Link href="/blog/[id]" as={`/blog/${item.blog_id}`} key={item.blog_id}>
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
                )}
            </PostsContent>}
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
`;

const PostsHeader = styled.div`
    display:flex;
    justify-content:space-between;
    &>h1{
        font-size:28px;
        font-weight:400;
        margin:0;
    }
    &>a{
        color:#333333;
        text-decoration:none;
        margin:auto 0px 0px auto;
        cursor: pointer;
        font-size:16px;
    }
    &>svg{
        width:12px;
        height:12px;
        margin:auto 0px 2px 0px;
    }
`;

const PostsContent = styled.div`
    margin:20px 0px 0px 0px;
    border-top:1px solid #b4b2b2;
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
`;
export default LatestPosts;