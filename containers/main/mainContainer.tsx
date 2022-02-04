import React, {useState, useEffect} from 'react';
import {observer} from 'mobx-react';
import MainTemplate from '../../components/layout/main/MainTemplate';
import MainTop from '../../components/layout/main/mainTop';
import ExplainSite from '../../components/layout/main/explainSite';
import LatestPosts from '../../components/layout/main/latestPosts';
import useStores from '../../hooks/use-stores';
import {Toaster} from '../../utils/common';

const MainContainer = observer(() => {
    const {blogStore} = useStores();
    const [loading, setLoading]  = useState(false);

    useEffect(()=> {
        getBlogList();
    },[]);

    const getBlogList = async (): Promise<void> => {
        try {
            setLoading(true);
            const res = await blogStore.getBlogList("1");
            blogStore.setBlogs(res.data);
            setLoading(false);
        } catch(err) {
            Toaster.showError('정보를 불러오는중 에러가 발생하였습니다.');
        }
    }

    return (
        <MainTemplate>
            <MainTop />
            <ExplainSite />
            <LatestPosts blogs={blogStore.blogs} loading={loading}/>
        </MainTemplate>
    );
})

export default MainContainer;