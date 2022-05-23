import { ReactNode } from 'react';

export interface TagsProps {
  className?: string;

  as?: string;

  addons?: boolean;

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

  light?: boolean;

  size?:
    | 'normal'
    | 'medium'
    | 'large';

  children?: ReactNode;
}
