import React from 'react';
import styled from 'styled-components';

const LoginComponent: React.FC = () =>{
    return(
        <LoginWrap>
            <LoginContainer>
                <h1>로그인</h1>
                <LoginContent>
                    <p>Email or Id</p>
                    <input type="text" />
                    <p>Password</p>
                    <input type="text" />
                </LoginContent>
            </LoginContainer>
        </LoginWrap>
    );
}

const LoginWrap = styled.div`

`;

const LoginContainer = styled.div`
    width:360px;
    margin: 200px auto 0 auto;  
    &>h1{
        margin:0px 0px 20px 0px;
        font-size:26px;
    }
`;

const LoginContent = styled.div`
    &>p{
        margin:0;
    }
    &>input{
        width:100%;
        height:50px;
        outline:none;
        padding:0 10px;
    }

`;
export default LoginComponent;