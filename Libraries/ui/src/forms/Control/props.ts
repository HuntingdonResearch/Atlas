import { ReactNode } from 'react';

export interface ControlProps {
  className?: string;

  as?: string;

  expanded?: boolean;

  children?: ReactNode;
}
