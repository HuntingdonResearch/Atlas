import { ReactNode } from 'react';

export interface NotificationProps {
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

  light?: boolean;

  children?: ReactNode;

  onDismiss?: (e: MouseEvent) => void;
}
