import { ReactNode } from 'react';
import { WhenFunc } from '../../types/WhenFunc';

export interface HelpProps {
  className?: string;

  color?:
    | 'black'
    | 'white'
    | 'dark'
    | 'light'
    | 'primary'
    | 'link'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger';

  when?: boolean | WhenFunc;

  children?: ReactNode;
}
