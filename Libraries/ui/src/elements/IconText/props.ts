import { ReactNode } from 'react';

export interface IconTextProps {
  className?: string;

  as?: string;

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
