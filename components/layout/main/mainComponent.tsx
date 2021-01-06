import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';

import ExplainSite from './explainSite';
import LatestPosts from './latestPosts';

const MainComponent: React.FC = () =>{
    return(
        <MainWrap>
            <MainBackground style={{backgroundImage:`url(${'./images/mainBackground.png'})`}}>
                    <div>
                        <input type="text" placeholder="검색하실 내용 및 키워드를 입력해주세요." />
                        <SearchIcon />
                    </div>
            </MainBackground>
            <MainContent>
                <ExplainSite />
                <LatestPosts />
            </MainContent>
        </MainWrap>
    );
}

const MainWrap = styled.div`

`;

const MainBackground = styled.div`
    border: 1px solid;
    height:500px;
    &>div{
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