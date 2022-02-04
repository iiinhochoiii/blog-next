import BaseTemplate from '@/components/template/base';
import BlogContainer from '@/containers/blog/blogContainer';
import {useRouter} from 'next/router';

const Blog = () =>{
    const router = useRouter();
    const query = router.query;
    return(
        <BaseTemplate title="blog">
            <BlogContainer title={query.title} page={query.page} />
        </BaseTemplate>
    );
}

export default Blog;