import BaseTemplate from '@/components/template/base';
import BlogReadContainer from '@/containers/blog/blogReadContainer';

const BlogDetail = ({data}:any) =>{
    return(
        <BaseTemplate title="blog">
            <BlogReadContainer blog_id={data.id}/>
        </BaseTemplate>
    );
}

export async function getServerSideProps(context:any) {
	const data = context.query;
	if (!data) {
		return {
			notFound: true,
		};
	}
	return {
		props: {
			data,
		},
	};
}
export default BlogDetail;