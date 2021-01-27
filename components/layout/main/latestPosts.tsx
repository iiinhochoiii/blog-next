import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import {blogs} from '../../../stores/blog/types';

interface Props{
    blogs:blogs[];
}
const LatestPosts: React.FC<Props> = ({blogs}) =>{
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
                <PostsContent>
                    {blogs.reverse().map((item,index)=>
                    index<3&&
                    <Link href="/blog/[id]" as={`/blog/${item.blog_id}`} key={item.blog_id}>
                        <a>
                        <article>
                            <div className="posts_wrap">
                                <div className="posts_thumb">
                                    <p>Thumb Image</p>
                                </div>
                                <div className="posts_content">
                                    <h2>{item.title}</h2>
                                    <p>{item.summary}</p>
                                    <div className="posts_writer">
                                        <div className="writer_image">
                                            <p>{item.name.slice(1, item.name.length)}</p>
                                        </div>
                                        <p>{item.name}</p>
                                    </div>
                                </div>
                            </div>
                        </article>
                        </a>
                    </Link>
                    )}
                </PostsContent>
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
        width:1180px;
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
    display:flex;
    justify-content:space-between;
    &>a{
        color:#333333;
        text-decoration:none;
        width:30%;
        &>article{
            border:1px solid;
            cursor: pointer;
            &>.posts_wrap{
                width:100%;
                position: relative;
                padding-bottom:120%;
                &>.posts_thumb{
                position: absolute;
                top:0;
                left:0;
                right:0;
                height:30%;
                background-color:#333333;
                display:flex;
                &>p{
                    margin:auto;
                    font-size:20px;
                    color:#ffffff;
                }
                }
                &>.posts_content{
                    position: absolute;
                    top:30%;
                    left:0;
                    right:0;
                    bottom:0;
                    padding:20px;
                    &>h2{
                        margin:0;
                    }
                    &>p{
                        margin: 20px 0px 0px 0px;
                    }
                    &>.posts_writer{
                        display:flex;
                        position: absolute;
                        bottom:20px;
                        &>.writer_image{
                            width:35px;
                            height:35px;
                            border-radius:50%;
                            background-color:#3C5087;
                            margin:auto 0;
                            display:flex;
                            &>p{
                                margin:auto;
                                font-size:12px;
                                color:#ffffff;
                                font-weight:500;
                            }
                        }
                        &>p{
                            margin: auto 0px auto 10px;
                        }
                    }
                    
                }
            }
        }
    }
`;
export default LatestPosts;