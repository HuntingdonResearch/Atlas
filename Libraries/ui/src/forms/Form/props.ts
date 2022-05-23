import { ReactNode } from 'react';

export interface FormProps {
  className?: string;

  method?: 'GET' | 'POST';

  action?: string;

  children?: ReactNode;

  onSubmit?: () => Promise<void>;
}
