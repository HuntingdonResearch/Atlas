import { ReactNode } from 'react';

export interface PaginationListLinkProps {
  className?: string;

  current?: boolean;

  ariaLabel?: string;

  children?: ReactNode;

  onClick?: (e: any) => void;
}
