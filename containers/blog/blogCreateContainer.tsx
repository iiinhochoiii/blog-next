import React, { useEffect} from 'react';
import {observer} from 'mobx-react';
import BlogCreateComponent from '../../components/blog/create';
import router from 'next/router';
import useStores from '../../hooks/use-stores';
import {Toaster} from '../../utils/common';

const BlogCreateContainer = observer((): JSX.Element=>{
    const { blogStore } = useStores();

    useEffect(()=>{
        if(process.browser){
            const user:any = localStorage.getItem('auth');
            if(user===null){
                router.push('/');
            } else if(JSON.parse(user).user_id !== 1){
                router.push('/');
            }
        }
    },[]);

    const createBlog = async (title:string, summary:string, content:string, type:string, markdown:string) => {
        try {
            const res = await blogStore.createBlog(title,summary,content, type, markdown);
            
            if(res.status){
                router.push('/blog');
                Toaster.showSuccess(res?.massage || '게시물이 등록 되었습니다.');
            }
        } catch(err){
            Toaster.showError('블로그 생성 중 오류가 발생하였습니다.');
        }
    };
    return (
        <BlogCreateComponent 
            createBlog={createBlog}
        />
    );
});

export default BlogCreateContainer;