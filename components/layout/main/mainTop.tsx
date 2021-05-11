import React from 'react';
import styled from 'styled-components';

const MainTop: React.FC = () =>{
    return(
            <MainBackground style={{backgroundImage:`url(${'./images/main_background.jpg'})`}}>
                    <h1>최인호의 Dev Blog 입니다.</h1>
            </MainBackground>
    );
}


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

export default MainTop;