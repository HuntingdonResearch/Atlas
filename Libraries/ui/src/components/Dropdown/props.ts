import { ReactNode } from 'react';

export interface DropdownProps {
  className?: string;

  name: string;

  active?: boolean;

  hoverable?: boolean;

  alignment?:
    | 'left'
    | 'right';

  direction?:
    | 'down'
    | 'up';

  children: ReactNode;
}
