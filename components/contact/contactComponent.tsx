import React from 'react';
import styled from 'styled-components';
import ContactActivity from './contactActivity';

type form ={
    name:string;
    email:string;
    phone:string;
    message:string;
}

interface Props{
    createContact:(contact:form)=>void;
}

const ContactComponent:React.FC<Props> = ({createContact}) =>{
    return(
        <ContactWrap>
            <Background style={{backgroundImage:`url("./images/contact_background.jpg")`}}>
                <div>
                    <h1>Contact</h1>
                    <p>If you have any questions or suggestions, please contact us.</p>
                </div>
            </Background>
            <ContactContainer>
            <ContactActivity 
                createContact={createContact}
            />
            </ContactContainer>
        </ContactWrap>
    );
}

const ContactWrap = styled.div`

`;

const Background = styled.div`
    height:300px;
    background-size:100% 300px;
    background: no-repeat center;
    position: relative;
    &>div{
        background:rgba(0,0,0,0.3);
        position: absolute;
        top:0;
        bottom:0;
        left:0;
        right:0;
        text-align:center;
        padding-top:100px;
        &>h1{
            margin:0;
            color:#ffffff;
            font-size:42px;
        }
        &>p{
            margin:20px 0px 0px 0px;
            color:#ffffff;
            font-size:18px;
            font-weight:bold;
        }
    }

    @media screen and (max-width: 690px){
        &>div{
            &>h1{
                font-size:24px;
            }
            &>p{
                font-size:16px;
            }
        }
    }
`;

const ContactContainer = styled.div`
    width:980px;
    max-width:100%;
    margin:0 auto;

    @media screen and (max-width: 1010px){
        width:calc(100% - 30px);
    }
`;

export default ContactComponent;