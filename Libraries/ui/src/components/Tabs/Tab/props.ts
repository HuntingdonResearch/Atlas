import { ReactNode } from 'react';

export interface TabsTabProps {
  className?: string;

  index?: number;

  children?: ReactNode;

  onClick?: (e: MouseEvent) => void;
}
