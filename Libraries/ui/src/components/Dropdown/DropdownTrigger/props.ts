import { ReactNode } from 'react';

export interface DropdownTriggerProps {
  className?: string;

  name?: string;

  children?: ReactNode;

  toggleActive?: () => void;
}
