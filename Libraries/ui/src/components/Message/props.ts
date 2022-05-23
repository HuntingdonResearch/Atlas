import { ReactNode } from 'react';

export interface MessageProps {
  className?: string;

  color?:
    | 'dark'
    | 'light'
    | 'primary'
    | 'link'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger'
    | 'black'
    | 'white';

  size?:
    | 'small'
    | 'normal'
    | 'medium'
    | 'large';

  children?: ReactNode;
}
