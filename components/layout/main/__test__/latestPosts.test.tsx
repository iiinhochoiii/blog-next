import React from 'react';
import {render} from '@testing-library/react';
import LatestPosts from '../latestPosts';

describe('<LatestPosts />',()=>{
    

    const setup = () =>{
        const utils = render(<LatestPosts blogs={[]} loading={false} />);
        const {getByText} =  utils;

        const headerText = getByText('Recently Posts');
        const moreText = getByText('더보기');

        return {
            ...utils,
            headerText,
            moreText
        }
    }
    
    it('<LatestPosts /> snapshot',()=>{
        const el = render(<LatestPosts loading={false} blogs={[]} />);
        expect(el).toMatchSnapshot();
    })

    it('has a Header of <h1> from PostHeader',()=>{
        const {headerText} = setup();
        expect(headerText).toBeTruthy();
    })

    it('has a Link of <a> from MoreContent',()=>{
        const {moreText} = setup();
        expect(moreText).toBeTruthy();
    })
});