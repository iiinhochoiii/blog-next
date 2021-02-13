import React from 'react';
import styled from 'styled-components';
import ExplainSite from './explainSite';
import LatestPosts from './latestPosts';
import {blogs} from '../../../stores/blog/types';

interface Props{
    blogs:blogs[];
    loading:boolean;
}
const MainComponent: React.FC<Props> = ({blogs, loading}) =>{
    
    
    return(
        <MainWrap>
            <MainBackground style={{backgroundImage:`url(${'./images/main_background.jpg'})`}}>
                    <h1>최인호의 Dev Blog 입니다.</h1>
            </MainBackground>
                <ExplainSite />
                <LatestPosts 
                    blogs={blogs}
                    loading={loading}
                />
        </MainWrap>
    );
}

const MainWrap = styled.div`
    height:100%;
`;

const MainBackground = styled.div`
    height:300px;
    background-size:cover;
    &>h1{
        margin:0;
        position: relative;
        top:45%;
        text-align:center;
        color:#ffffff;
    }

    @media screen and (max-width: 690px){
        &>h1{
            font-size:24px;
        }
    }
`;

export default MainComponent;