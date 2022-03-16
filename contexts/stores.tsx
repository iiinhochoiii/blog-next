import React from 'react';
import { ContactStore, UserStore, BlogStore, AuthStore } from '@/stores';
import ContextProps from '@/interfaces/context-props';

const storesContext = React.createContext<ContextProps>({
  contactStore: new ContactStore(),
  userStore: new UserStore(),
  blogStore: new BlogStore(),
  authStore: new AuthStore(),
});

export default storesContext;
