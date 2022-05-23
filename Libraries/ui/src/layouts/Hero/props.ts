import { ReactNode } from 'react';

export interface HeroProps {
  className?: string;

  as?: string;

  color?:
    | 'black'
    | 'white'
    | 'dark'
    | 'light'
    | 'text'
    | 'primary'
    | 'link'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger';

  size?:
    | 'small'
    | 'medium'
    | 'large'
    | 'halfheight'
    | 'fullheight';

  withNavBar?: boolean;

  children?: ReactNode;
}
