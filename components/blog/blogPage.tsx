import React from 'react';
import {useState, useEffect} from 'react';
import styled from 'styled-components';
import router from "next/router";
import {pageType} from '../../stores/blog/types';

interface Props{
    page?: pageType;
    pageNum: string;
}

const BlogPage: React.FC<Props> = ({page, pageNum}) =>{
    // const arr:any= page&&Array.from({length:page.lastPageNum},(_i, v) => v+1);
    const [queryPage, setQueryPage] = useState<number>(1);

    useEffect(()=>{
        setQueryPage(pageNum?Number(pageNum):1);
    },[pageNum]);

    const paging = () =>{
        if(page){
            const pageArr:number[] = [];
            const pageNavSize:number = 5;
            const startPage = Math.ceil(queryPage / pageNavSize -1 ) * pageNavSize + 1;
            const endPage = Math.ceil(queryPage / pageNavSize) * pageNavSize;

            for(let i:number = startPage; i<=endPage; i++){
                if(i<= Math.ceil(page.totalLength / page.limit )){
                    pageArr.push(i);
                }
            }
            return pageArr;
        }
    }

    const arr:number[] | undefined = paging();

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

    const pagingHandler = (num:number) =>{
        if(Number(queryPage) !== num){
            router.push(`/blog?page=${num}`);
            scrollTo(0,0);
        }
    }

    return(
        <BlogPageWrap>
            <div>
                <p onClick={()=>pageMoveHandler("prev")}>이전</p>
            </div>
            <ul>
                {arr&&arr.map((item:number)=>
                <li key={item} style={item === queryPage?{backgroundColor:"rgb(18,184,134)", color:"#fff", fontWeight:400, cursor:"unset"}:{}} onClick={()=>pagingHandler(item)}>
                    {item}
                </li>
                )
              }
            </ul>
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
    &>ul{
        margin:0;
        list-style-type: none;
        display:flex;
        padding:0;
        &>li{
            margin:0px 10px;
            padding: 5px 10px;
            border:2px solid rgb(18,184,134);
            border-radius:5px;
            color: rgb(18,184,134);
            text-decoration:none;
            cursor: pointer;
        }
    }
    &>div{
        margin:0px 10px;
        display:flex;
        &>p{
            margin:auto 0;
            cursor: pointer;
            color: rgb(18,184,134);
        }
    }
`;

export default BlogPage;