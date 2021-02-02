import React from 'react';
import {useState} from 'react';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import ExplainSite from './explainSite';
import LatestPosts from './latestPosts';
import {blogs} from '../../../stores/blog/types';
import router from 'next/router';

interface Props{
    blogs:blogs[];
    loading:boolean;
}
const MainComponent: React.FC<Props> = ({blogs, loading}) =>{
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
        <MainWrap>
            <MainBackground style={{backgroundImage:`url(${'./images/main_background.jpg'})`}}>
                    <h1>최인호의 Dev Blog 입니다.</h1>
                    <form onSubmit={search}>
                        <input type="text" placeholder="검색하실 내용 및 키워드를 입력해주세요." value={keyword} id="keyword" onChange={changeHandler}/>
                        <SearchIcon onClick={search}/>
                    </form>
            </MainBackground>
            <MainContent>
                <ExplainSite />
                <LatestPosts 
                    blogs={blogs}
                    loading={loading}
                />
            </MainContent>
        </MainWrap>
    );
}

const MainWrap = styled.div`

`;

const MainBackground = styled.div`
    height:300px;
    background-size:cover;
    &>h1{
        margin:0;
        position: relative;
        top:30%;
        text-align:center;
        color:#ffffff;
    }
    &>form{
        margin:0 auto;
        background-color:#ffffff;
        position: relative;
        top:40%;
        width:30%;
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
`;

const MainContent = styled.div`
`;
export default MainComponent;