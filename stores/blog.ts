import { action, observable, makeObservable } from 'mobx';
import { blogs, pageType } from '@/interfaces/models/blog';
import axios from '@/utils/axios';

class BlogStore {
  protected modelName: string;

  constructor() {
    makeObservable(this);
    this.modelName = 'blogs';
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
      const res = await axios.get(`/${this.modelName}?page=${page}`);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  getSearchBlogList = async (params: { title?: string; page: number; userId?: string; showStatus?: boolean }) => {
    try {
      const { page, title, userId, showStatus } = params;

      let query = `page=${page || 1}`;
      if (title) {
        query = query + `&title=${title}`;
      }
      if (showStatus) {
        query = query + `&showStatus=${showStatus}`;
      }

      let url = '';
      if (userId) {
        url = `/${this.modelName}/${userId}/search?`;
      } else {
        url = `/${this.modelName}/search?`;
      }
      const res = await axios.get(`${url}${query}`);
      return res.data;
    } catch (e) {
      console.log(e);
    }
  };

  getBlogItem = async (blog_id: number) => {
    try {
      const res = await axios.get(`/${this.modelName}/read/${blog_id}`);
      return res.data;
    } catch (e) {
      console.log(e);
    }
  };

  createBlog = async (title: string, summary: string, content: string, category_id: number, markdown: string) => {
    try {
      const res = await axios.post(`/${this.modelName}`, { title: title, summary: summary, content: content, category_id: category_id, markdown: markdown });
      return res.data;
    } catch (e) {
      console.log(e);
    }
  };

  deleteBlog = async (blog_id: number) => {
    try {
      const res = await axios.delete(`/${this.modelName}/${blog_id}`);
      return res.data;
    } catch (e) {
      console.log(e);
    }
  };

  updateBlog = async (blog_id: number, title: string, summary: string, content: string, category_id: number, markdown: string) => {
    try {
      const res = await axios.post(`/${this.modelName}/update`, {
        blog_id: blog_id,
        title: title,
        summary: summary,
        content: content,
        category_id: category_id,
        markdown: markdown,
      });
      return res.data;
    } catch (e) {
      console.log(e);
    }
  };

  hideBlog = async (params: { blog_id: number; hideStatus: boolean }) => {
    const res = await axios.post(`/${this.modelName}/hide`, params);
    return res.data;
  };
}

export default BlogStore;
