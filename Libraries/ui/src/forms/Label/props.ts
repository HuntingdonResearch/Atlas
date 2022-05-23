import { ReactNode } from 'react';

export interface LabelProps {
  className?: string;

  children?: ReactNode;

  htmlFor?: string;

  size?:
    | 'small'
    | 'medium'
    | 'large';
}
