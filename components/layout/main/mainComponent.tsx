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
}
const MainComponent: React.FC<Props> = ({blogs}) =>{
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
            <MainBackground style={{backgroundImage:`url(${'./images/mainBackground.png'})`}}>
                    <form onSubmit={search}>
                        <input type="text" placeholder="검색하실 내용 및 키워드를 입력해주세요." value={keyword} id="keyword" onChange={changeHandler}/>
                        <SearchIcon onClick={search}/>
                    </form>
            </MainBackground>
            <MainContent>
                <ExplainSite />
                <LatestPosts 
                    blogs={blogs}
                />
            </MainContent>
        </MainWrap>
    );
}

const MainWrap = styled.div`

`;

const MainBackground = styled.div`
    border: 1px solid;
    height:500px;
    &>form{
        margin:0 auto;
        background-color:#ffffff;
        position: relative;
        top:65%;
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