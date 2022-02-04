import BaseTemplate from '@/components/template/base';
import BlogUpdateContainer from '@/containers/blog/blogUpdateContainer';
import {useRouter} from 'next/router';

const BlogCreate = () =>{
    const router = useRouter();
    return(
        <BaseTemplate title="blog">
            <BlogUpdateContainer query={router.query} />
        </BaseTemplate>
    );
}

export default BlogCreate;