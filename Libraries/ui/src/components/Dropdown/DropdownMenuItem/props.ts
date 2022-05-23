import { ReactNode } from 'react';

export interface DropdownMenuItemProps {
  className?: string;

  setInactive?: () => {};

  children?: ReactNode;
}
