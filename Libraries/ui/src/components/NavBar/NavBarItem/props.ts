import { ReactNode } from 'react';

export interface NavBarItemProps {
  className?: string;

  href?: string;

  active?: boolean;

  hoverable?: boolean;

  children: ReactNode;

  onClick?: () => void;
}
