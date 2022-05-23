import { ReactNode } from 'react';

export interface FieldProps {
  className?: string;

  horizontal?: boolean;

  grouped?: boolean;

  addons?: boolean;

  alignment?:
    | 'left'
    | 'centered'
    | 'right'
    | 'multiline';

  children?: ReactNode;
}
