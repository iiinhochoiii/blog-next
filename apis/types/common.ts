import { pageType } from '@/types/blog';

// 백엔드 공통 응답 형태 (메시지 키가 API마다 message / msg / massage 로 섞여 있음)
export interface ApiResponse<T = unknown> {
  status: boolean;
  data: T;
  message?: string;
  msg?: string;
  massage?: string;
  token?: string;
  page?: pageType;
}
