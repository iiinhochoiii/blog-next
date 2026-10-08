import { createStore } from 'zustand/vanilla';
import { UserInfo } from '@/types/user';

export interface UserState {
  userInfo?: UserInfo;
  setUserInfo: (userInfo?: UserInfo) => void;
}

export type UserStore = ReturnType<typeof createUserStore>;

// SSR 에서 요청 간 상태가 공유되지 않도록 전역 싱글톤 대신 요청(앱 인스턴스)마다 스토어를 생성한다.
export const createUserStore = (initState: Pick<UserState, 'userInfo'> = {}) =>
  createStore<UserState>()((set) => ({
    ...initState,
    setUserInfo: (userInfo) => set({ userInfo }),
  }));
