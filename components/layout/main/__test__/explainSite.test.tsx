import React from 'react';
import {render} from '@testing-library/react';
import ExplainSite from '../explainSite';

describe('<ExplainSite />',()=>{
    it('<ExplainSite /> snapshot', ()=>{
        const el = render(<ExplainSite />);
        expect(el).toMatchSnapshot();
    });

    it('has a text of <h1> from ExplainContainer', ()=>{
        const el = render(<ExplainSite />);
        const h1 = el.getByText('Try the various services provided by Choi Tech.');
        expect(h1).toBeTruthy();
    });

    it('has a text of <h2> from ExplainContent', ()=>{
        const el = render(<ExplainSite />);
        const h2 = el.getByText('지식 공유');
        expect(h2).toBeTruthy();
    })
    
    it('has a text of <p> from ExplainContent', ()=>{
        const el = render(<ExplainSite />);
        const p = el.getByText('Front-end 프레임워크인 React에 관련된 기술 및 경험을 공유 합니다. 주로 개발 환경 구성 및, 이슈 대응, 문제 해결 등 다양한 주제를 다루고 있습니다. 또한, 공유한 지식에 대하여, 질의 응답 등을 이용 할 수 있습니다.');
        expect(p).toBeTruthy();
    })

})