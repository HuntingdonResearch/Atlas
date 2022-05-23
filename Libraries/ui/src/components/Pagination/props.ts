import { ReactNode } from 'react';

export interface PaginationProps {
  className?: string;

  rounded?: boolean;

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
