import { ChangeEvent } from 'react';

export interface TelInputProps {
  className?: string;

  name: string;

  color?:
    | 'primary'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger';

  size?:
    | 'small'
    | 'medium'
    | 'large';

  placeholder: string;

  defaultValue?: string;

  pattern?: string;

  disabled?: boolean;

  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
