export type blogs = {
  blog_id: number;
  user_id: number;
  title: string;
  summary: string;
  content: string;
  created_at: string;
  blog_type: string;
  name: string;
  markdown: string;
  show_status?: string;
};

export type pageType = {
  totalLength: number;
  limit: number;
  indexOfFirstPost: number;
  indexOfLastPost: number;
  lastPageNum: number;
};

export interface Blog {
  blog_id?: number;
  blog_type?: string;
  created_at?: string;
  name?: string;
  summary?: string;
  title?: string;
  user_id?: number;
  show_status?: string;
}

export interface SearchKeywordForm {
  keyword?: string;
}

export interface PostType {
  id: number;
  value: string;
}

export interface BlogForm {
  title: string;
  summary: string;
  type: string;
  content?: string;
  markdown?: string;
}
