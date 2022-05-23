import { ReactNode } from 'react';

export interface PanelTabProps {
  className?: string;

  group: string;

  children?: ReactNode;

  onClick?: () => void;
}
