import { action, observable, makeObservable } from 'mobx';
import client from '@/lib/client';
import { blogs, pageType } from '@/interfaces/models/blog';
import qs from 'qs';

class BlogStore {
  constructor() {
    makeObservable(this);
  }

  @observable
  blogs: blogs[] = [];

  @observable
  blogItem?: blogs;

  @observable
  page?: pageType;

  @action
  setBlogs = (value) => {
    this.blogs = value;
  };

  @action
  setPage = (value) => {
    this.page = value;
  };

  @action
  setBlogItem = (value) => {
    this.blogItem = value;
  };

  getBlogList = async (page: string) => {
    try {
      const res = await client.get(`/api/blogs?page=${page}`);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  getSearchBlogList = async (title: string) => {
    try {
      const res = await client.get(`/api/blogs/search?title=${title}`);
      return res.data;
    } catch (e) {
      console.log(e);
    }
  };

  getBlogItem = async (blog_id: number) => {
    try {
      const res = await client.get(`/api/blogs/read/${blog_id}`);
      return res.data;
    } catch (e) {
      console.log(e);
    }
  };

  createBlog = async (title: string, summary: string, content: string, type: string, markdown: string) => {
    try {
      const res = await client.post('/api/blogs', qs.stringify({ title: title, summary: summary, content: content, type: type, markdown: markdown }));
      return res.data;
    } catch (e) {
      console.log(e);
    }
  };

  deleteBlog = async (blog_id: number) => {
    try {
      const res = await client.delete(`/api/blogs/${blog_id}`);
      return res.data;
    } catch (e) {
      console.log(e);
    }
  };

  updateBlog = async (blog_id: number, title: string, summary: string, content: string, blog_type: string, markdown: string, token: string) => {
    try {
      const res = await client.post(
        '/api/blogs/update',
        qs.stringify({ blog_id: blog_id, title: title, summary: summary, content: content, blog_type: blog_type, markdown: markdown, token }),
      );
      return res.data;
    } catch (e) {
      console.log(e);
    }
  };
}

export default BlogStore;
