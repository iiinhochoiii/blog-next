import React, { createContext, useContext, useRef } from 'react';
import { useStore } from 'zustand';
import { UserInfo } from '@/types/user';
import { createUserStore, UserState, UserStore } from './user';

const UserStoreContext = createContext<UserStore | null>(null);

interface Props {
  children: React.ReactNode;
  initialUserInfo?: UserInfo;
}

export const UserStoreProvider = ({ children, initialUserInfo }: Props) => {
  const storeRef = useRef<UserStore>();
  if (!storeRef.current) {
    storeRef.current = createUserStore({ userInfo: initialUserInfo });
  }

  return <UserStoreContext.Provider value={storeRef.current}>{children}</UserStoreContext.Provider>;
};

export const useUserStore = <T,>(selector: (state: UserState) => T): T => {
  const store = useContext(UserStoreContext);
  if (!store) {
    throw new Error('useUserStore must be used within UserStoreProvider');
  }

  return useStore(store, selector);
};
