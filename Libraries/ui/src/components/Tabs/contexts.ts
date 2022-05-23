import { createContext, Dispatch } from 'react';

export const ReducerContext = createContext<{ state: any, dispatch: Dispatch<any>}>({ state: null, dispatch: () => {}});
