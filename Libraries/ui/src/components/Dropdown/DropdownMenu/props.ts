import { ReactNode } from 'react';

export interface DropdownMenuProps {
  name?: string;

  className?: string;

  children?: ReactNode;

  setInactive?: () => void;
}
