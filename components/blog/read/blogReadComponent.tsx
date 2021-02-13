import React from 'react';
import {useEffect, useState} from 'react';
import styled from 'styled-components';
import Parser from 'html-react-parser';
import {blogs} from '../../../stores/blog/types';
import Prism from 'prismjs';
import {DiscussionEmbed} from 'disqus-react';
import moment from 'moment';
import Router from 'next/router';
import blog_background from '../../../public/images/blog_background.jpg';

interface Props{
    blogItem?:blogs;
    deleteBlog:(blog_id:number)=>void;
}
const BlogReadComponent: React.FC<Props> = ({blogItem, deleteBlog}) =>{
    const [updateState, setUpdateState] = useState<boolean>(false);
    const [settingState, setSettingState] = useState<boolean>(false);
    useEffect(()=>{
        let auth;
        if(process.browser && localStorage.getItem('auth')){
           auth = JSON.parse(String(localStorage.getItem('auth')));
           if(blogItem?.user_id === auth.user_id){
               setUpdateState(true);
           }
           else{
            setUpdateState(false);
           }
        }
    },[blogItem]);
        
    useEffect(()=>{
        Prism.highlightAll();
    });

    const deleteHandler = () =>{
        if(window.confirm('삭제하시겠습니까?')){
            deleteBlog(Number(blogItem?.blog_id));
        }
    }

    const updateHandler = () =>{
        Router.push({
            pathname:"/blog/update",
            query:{
                blog_id:blogItem?.blog_id
            }
        })
    }
    return(
        <ReadWrap>
            <BlogBackground >
                    <div>
                        <div>
                            <h1>{blogItem?.title}</h1>
                            <p>{blogItem?.name}</p>
                            <span>{moment(blogItem?.created_at).format("YYYY-MM-DD")}</span>
                            {updateState&&
                                <div className="blog_update_container">
                                    <p onClick={()=>setSettingState(!settingState)}>설정</p>
                                    {settingState&&
                                    <div>
                                        <p onClick={updateHandler}>수정</p>
                                        <p onClick={deleteHandler}>삭제</p>
                                    </div>
                                    }
                                </div>
                            }
                        </div>
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
    height:300px;
    background-size:100% 300px;
    background: no-repeat center;
    position: relative;  
    background-image:url(${blog_background});
    &>div{
        background:rgba(0,0,0,0.3);
        position: absolute;
        top:0;
        bottom:0;
        left:0;
        right:0;
        
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
            &>.blog_update_container{
                padding-top:30px;
                position: relative;
                &>p{
                    border:1px solid #fff;
                    color:#fff;
                    font-weight:bold;
                    padding:5px 0px;
                    width:100px;
                    margin:0;
                    border-radius:10px;
                    font-size:14px;
                    cursor: pointer;
                    text-align:center;
                }
                &>div{
                    position: absolute;
                    margin-top:10px;
                    width:100px;
                    background-color:#fff;
                    border: 1px solid rgb(214,214,214);
                    padding:5px;
                    &>p{
                        font-size:12px;
                        text-align:center;
                        cursor: pointer;
                        padding:10px 0px;
                        margin:0;
                        &:hover{
                            background-color:rgb(248, 248, 248);
                        }
                    }
                }
            }
        }
    }
    @media screen and (max-width:1010px){
        &>div{
            &>div{
                width:calc(100% - 30px);
            }
        }
    }

    @media screen and (max-width: 690px){
        &>div{
            &>div{
                &>h1{
                    font-size:22px;
                }
                &>p, span{
                    font-size:14px;
                }
            }
        }
    }
`;

const ReadContainer = styled.div`
    width:980px;
    max-width:100%;
    margin:0 auto;

    @media screen and (max-width: 1010px){
        width:calc(100% - 30px);
    }
`;
const ReadContent = styled.div`
    height:100%;
    margin:50px 0px 30px 0px;
    max-width:100%;
    img{
        width:100%;
    }
    blockquote{
        border-left:4px solid #e5e5e5;
        margin-block-start: 0px;
        margin-inline-start: 0px;
        padding:5px 0px;
        &>p{
            margin:0px 0px 0px 20px;
        }
    }
`;

const Review = styled.div`

`;
export default BlogReadComponent;