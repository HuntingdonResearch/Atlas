import { ReactNode } from 'react';

export interface NavBarProps {
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

  transparent?: boolean;

  shadow?: boolean;

  spaced?: boolean;

  fixed?:
    | 'top'
    | 'bottom';

  children?: ReactNode;
}
