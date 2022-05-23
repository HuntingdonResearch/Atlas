import { ReactNode } from 'react';

export interface BreadcrumbProps {
  className?: string;

  alignment?:
    | 'left'
    | 'right'
    | 'centered';

  separator?:
    | 'arrow'
    | 'bullet'
    | 'dot'
    | 'succeeds';

  size?:
    | 'small'
    | 'normal'
    | 'medium'
    | 'large';

  children?: ReactNode;
}
