import React from 'react';
import styled from 'styled-components';
import GitHubIcon from '@material-ui/icons/GitHub';
import Link from 'next/link';

const Footer: React.FC = () =>{
    return(
        <FooterWrap>
            <FooterContainer>
                    <div>
                        <p>본 웹사이트는 개인 포트폴리오 목적으로 제작되었습니다.</p>
                        <p>문의 사항 및 건의 사항은 dlsgh120@gmail.com 으로 보내주시면 답변 드리겠습니다.</p>
                        <p className="footer_copyright">Copyright © 2021 by Choi Tech, Inc. All rights reserved</p>
                    </div>
                    <div>
                        <Link href="https://github.com/dlsgh120/blog-nextjs">
                            <a>
                                <GitHubIcon />
                            </a>
                        </Link>
                    </div>
            </FooterContainer>
        </FooterWrap>
    );
}

const FooterWrap = styled.div`
    width:100%;
    border-top: 1px solid rgb(229, 229, 229);
`;

const FooterContainer = styled.div`
    width:1180px;
    margin: 0 auto;
    max-width:100%;
    padding:25px 0px;
    display:flex;
    justify-content:space-between;
        &>div{
            &>p{
                margin:0;
                font-size:12px;
                line-height:20px;
            }
            &>.footer_copyright{
                font-weight:bold;
            }
            &>a{
                color:#333333;
                text-decoration:none;
                cursor: pointer;
            }
        }
`;
export default Footer;