import BaseTemplate from '../../components/template/base';
import BlogCreateContainer from '../../containers/blog/blogCreateContainer';

const BlogCreate = () =>{
    return(
        <BaseTemplate title="blog">
            <BlogCreateContainer />
        </BaseTemplate>
    );
}

export default BlogCreate;