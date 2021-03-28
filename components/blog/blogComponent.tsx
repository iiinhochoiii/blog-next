import React from 'react';
import {useState, useEffect} from 'react';
import styled from 'styled-components';
import {blogs, pageType} from '../../stores/blog/types';
import BlogHeader from './blogHeader';
import BlogContent from './blogContent';
import Link from "next/link";
import router from "next/router";

interface Props{
    blogs:blogs[];
    title:any;
    loading:boolean;
    page?: pageType;
    pageNum: string;
}
const BlogComponent: React.FC<Props> = ({blogs, page, title, loading, pageNum}) =>{
    const arr:any= page&&Array.from({length:page.lastPageNum},(_i, v) => v+1);

    const [queryPage, setQueryPage] = useState<number>(1);

    useEffect(()=>{
        setQueryPage(pageNum?Number(pageNum):1);
    },[pageNum]);
    
    const pageMoveHandler = (move:string) =>{
        if(move==="prev"){
            if(Number(queryPage)>1){
                router.push({
                    pathname:"/blog",
                    query:{
                        "page":queryPage-1
                    }
                })
            }
        }
        else if(move==="next"){
            if(page&&queryPage < page.lastPageNum){
                router.push({
                    pathname:"/blog",
                    query:{
                        "page":queryPage+1
                    }
                })
            }
        }
    }
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
                <BlogPage>
                    <div>
                        <p onClick={()=>pageMoveHandler("prev")}>이전</p>
                    </div>
                    {arr&&arr.map((item:number)=>
                    <div key={item}>
                        <Link href={`/blog?page=${item}`}>
                            <a style={item === queryPage?{backgroundColor:"rgb(18,184,134)", color:"#fff", fontWeight:400}:{}}>{item}</a>
                        </Link>
                    </div>)
                    }
                    <div>
                        <p onClick={()=>pageMoveHandler("next")}>
                            다음
                        </p>
                    </div>
                </BlogPage>
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

const BlogPage = styled.div`
    display:flex;
    justify-content:center;
    margin:0px 0px 70px 0px;
    &>div{
        margin:0px 10px;
        &>a{
            padding: 5px 10px;
            border:2px solid rgb(18,184,134);
            border-radius:5px;
            color: rgb(18,184,134);
            text-decoration:none;
        }
        &>p{
            margin:0;
            cursor: pointer;
            color: rgb(18,184,134);
        }
    }
`;
export default BlogComponent;