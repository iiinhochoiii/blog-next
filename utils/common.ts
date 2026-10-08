import axios from 'axios';
import { onToast, ToastType } from '@choi-ui/react-toast';

// API 에러 응답의 message 추출 (axios 에러가 아니거나 message 가 없으면 undefined)
export const getErrorMessage = (error: unknown): string | undefined => {
  return axios.isAxiosError(error) ? error.response?.data?.message : undefined;
};

// 기존 react-toastify 설정(상단 중앙, 2초)과 동일하게 맞춤
const defaultOptions: ToastType = {
  position: 'top',
  duration: 2000,
  isClosable: true,
};

export class Toaster {
  static showSuccess = (message?: string) => {
    onToast({ ...defaultOptions, message, type: 'success' });
  };

  static showError = (message?: string) => {
    onToast({ ...defaultOptions, message, type: 'error' });
  };

  static showWarning = (message?: string) => {
    onToast({ ...defaultOptions, message, type: 'warn' });
  };
}
