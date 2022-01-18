export type blogs = {
    blog_id:number;
    user_id:number;
    title:string;
    summary:string;
    content:string;
    created_at:string;
    blog_type:string;
    name:string;
    markdown:string;
}

export type pageType = {
    totalLength: number;
    limit: number;
    indexOfFirstPost: number;
    indexOfLastPost: number;
    lastPageNum: number;
}