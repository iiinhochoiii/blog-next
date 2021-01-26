import React from 'react';
import styled from 'styled-components';

const AboutComponent: React.FC = () =>{
    return(
        <AboutWrap>
            <AboutContainer>
                <div>
                    <h4>소개</h4>
                    <div>내용</div>
                </div>
                <div>
                    <h4>보유 기술</h4>
                    <div>
                        내용
                    </div>
                </div>
            </AboutContainer>
        </AboutWrap>
    );
}

const AboutWrap = styled.div`
    width:1180px;
    max-width:100%;
    margin:0 auto;
`;

const AboutContainer = styled.div`

`;

export default AboutComponent;