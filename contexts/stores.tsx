import React from 'react';
import ContactStore from '../stores/contact/contactStore';
import ContextProps from '../interfaces/context-props';

const storesContext = React.createContext<ContextProps>({
    contactStore: new ContactStore()
})

export default storesContext;