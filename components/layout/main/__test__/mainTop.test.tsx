import React from 'react'
import {render} from '@testing-library/react';
import MainTop from '../mainTop';

describe('<MainTop />',()=>{
    
    it('MainTop snapshot',()=>{
        const el = render(<MainTop />);
        expect(el).toMatchSnapshot();
    });

    it('has a logo of <h1> tag from main component', ()=>{
        const el = render(<MainTop />);
        const logo = el.getByText('최인호의 Dev Blog 입니다.');

        expect(logo).toBeTruthy();
    })
});