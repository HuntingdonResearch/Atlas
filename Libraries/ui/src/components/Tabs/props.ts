import { ReactNode } from 'react';

export interface TabsProps {
  className?: string;

  initialIndex?: number;

  alignment?:
    | 'left'
    | 'right'
    | 'centered';

  size?:
    | 'small'
    | 'normal'
    | 'medium'
    | 'large';

  look?:
    | 'boxed'
    | 'toggle'
    | 'toggle-rounded';

  fullwidth?: boolean;

  children?: ReactNode;

  onChange?: (newIndex: number, oldIndex: number) => void;
}
