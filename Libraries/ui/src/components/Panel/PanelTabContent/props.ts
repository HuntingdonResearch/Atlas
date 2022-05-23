import { ReactNode } from 'react';

export interface PanelTabContentProps {
  className?: string;

  name: string;

  groups?: string[];

  children?: ReactNode;
}
