import { ReactNode } from 'react';

export interface FieldLabelProps {
  className?: string;

  alignment?:
    | 'small'
    | 'normal'
    | 'medium'
    | 'large';

  children?: ReactNode;
}
