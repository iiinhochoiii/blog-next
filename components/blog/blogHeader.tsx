import React from 'react';
import {useState} from 'react';
import router from 'next/router';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';

const BlogHeader: React.FC = () =>{
    const [keyword, setKeyword] = useState<string>('');
    const changeHandler = (e:React.ChangeEvent<HTMLInputElement>) =>{
        const {id, value} = e.target;
        if(id==='keyword'){
            setKeyword(value);
        }
    }
    const search = (e:any) =>{
        e.preventDefault();
        if(keyword===''){
            alert('검색하실 내용 및 키워드를 입력해주세요.');
        } else{
            router.push({
                pathname: '/blog',
                query:{
                    title: keyword
                }
            })
        }
    }

    return(
        <BlogHader>
            <h1>Related Posts</h1>
            <form onSubmit={search}>
                <input type="text" placeholder="검색하실 내용 및 키워드를 입력해주세요." value={keyword} id="keyword" onChange={changeHandler}/>
                <SearchIcon onClick={search}/>
            </form>
        </BlogHader>
    );
}

const BlogHader = styled.div`
    margin-top:20px;
    display:flex;
    justify-content:space-between;
    &>h1{
        margin:0;
        font-size:26px;
        font-weight:400;
        color:rgb(18, 184, 134);
    }
    &>form{
        background-color:#ffffff;
        width:40%;
        height:45px;
        border:none;
        border-radius:10px;
        display:flex;
        padding:0 10px;
        &>input{
            margin:auto 0px auto 10px;
            height:80%;
            width:80%;
            outline:none;
            border:none;
        }
        &>svg{
            margin:auto 10px auto auto;
            cursor: pointer;
        }
    }
    
    @media screen and (max-width: 690px){
        flex-wrap:wrap;
        &>form{
            margin:20px 0px 0px 0px;
            width:100%;
        }
    }

    @media screen and (max-width: 690px){
        &>h1{
            font-size:22px;
        }
    }
`;
export default BlogHeader;