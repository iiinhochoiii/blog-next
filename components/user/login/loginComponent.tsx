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
                    <button>LOGIN</button>
                </LoginContent>
            </LoginContainer>
        </LoginWrap>
    );
}

const LoginWrap = styled.div`

`;

const LoginContainer = styled.div`
    width:360px;
    margin: 150px auto;  
    &>h1{
        margin:0px 0px 20px 0px;
        font-size:26px;
    }
`;

const LoginContent = styled.div`
    &>p{
        margin:0px 0px 5px 0px;
        font-size:12px;
    }
    &>input{
        width:calc(100% - 25px);
        height:50px;
        outline:none;
        padding:0 10px;
        margin-bottom:10px;
    }
    &>button{
        width:100%;
        height:40px;
        cursor: pointer;
        outline:none;
    }

`;
export default LoginComponent;