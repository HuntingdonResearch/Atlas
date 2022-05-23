import { ReactNode } from 'react';

export interface SwitchInputProps {
  className?: string;

  name: string;

  size?:
    | 'small'
    | 'medium'
    | 'large';

  checked?: boolean;

  children?: ReactNode;

  onClick?: () => void;
}
