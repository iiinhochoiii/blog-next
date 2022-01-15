import React from 'react';
import {StoresContext} from '../contexts';
import ContextProps from '../interfaces/context-props';

const useStores = (): ContextProps => React.useContext(StoresContext)

export default useStores;