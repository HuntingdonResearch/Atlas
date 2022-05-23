import { createContext, SetStateAction, Dispatch } from 'react';

export const IsActiveContext = createContext<[boolean, Dispatch<SetStateAction<boolean>>]>([false, () => {}]);
