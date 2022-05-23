import { ReactNode } from 'react';

export interface PanelProps {
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

  initialGroup: string;

  children?: ReactNode;
}
