import { ReactNode } from 'react';

export interface TileProps {
  className?: string;

  as?: string;

  coalescing?: boolean;

  context?:
    | 'ancestor'
    | 'parent'
    | 'child';

  direction?:
    | 'horizontal'
    | 'vertical';

  size?:
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12;

  children?: ReactNode;
}
