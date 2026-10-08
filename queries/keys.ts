import { BlogSearchParams } from '@/apis/blog';

// 도메인 간 invalidate 시 서로의 key 를 참조하므로 한 곳에서 관리한다.
export const blogKeys = {
  all: ['blogs'] as const,
  lists: () => [...blogKeys.all, 'list'] as const,
  list: (params: BlogSearchParams) => [...blogKeys.lists(), params] as const,
  details: () => [...blogKeys.all, 'detail'] as const,
  detail: (blog_id: number) => [...blogKeys.details(), blog_id] as const,
};

export const categoriesKeys = {
  all: ['categories'] as const,
};

export const contactKeys = {
  all: ['contacts'] as const,
};

export const userKeys = {
  all: ['users'] as const,
  detail: (id: number) => [...userKeys.all, id] as const,
};
