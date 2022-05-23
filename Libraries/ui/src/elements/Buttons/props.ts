import { ReactNode } from 'react';

export interface ButtonsProps {
  className?: string;

  as?: string;

  addons?: boolean;

  alignment?:
    | 'left'
    | 'right'
    | 'centered';

  size?:
    | 'small'
    | 'normal'
    | 'medium'
    | 'large';

  children?: ReactNode;
}
