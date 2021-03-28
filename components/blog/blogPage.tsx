import React from 'react';
import {useState, useEffect} from 'react';
import styled from 'styled-components';
import Link from "next/link";
import router from "next/router";
import {pageType} from '../../stores/blog/types';

interface Props{
    page?: pageType;
    pageNum: string;
}

const BlogPage: React.FC<Props> = ({page, pageNum}) =>{
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
        <BlogPageWrap>
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
        </BlogPageWrap>
    );
}

const BlogPageWrap = styled.div`
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

export default BlogPage;