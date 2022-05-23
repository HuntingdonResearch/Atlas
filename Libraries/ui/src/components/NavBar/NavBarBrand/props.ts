import { ReactNode } from 'react';

export interface NavBarBrandProps {
  className?: string;

  children?: ReactNode;

  onClick?: () => void;
}
