import React from 'react';
import { ContactStore, UserStore, BlogStore } from '@/stores';
import ContextProps from '@/interfaces/context-props';

const storesContext = React.createContext<ContextProps>({
  contactStore: new ContactStore(),
  userStore: new UserStore(),
  blogStore: new BlogStore(),
});

export default storesContext;
