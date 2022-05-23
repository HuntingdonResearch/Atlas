import { ChangeEvent } from 'react';

export interface EmailInputProps {
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

  placeholder?: string;

  defaultValue?: string;

  multiple?: boolean;

  disabled?: boolean;

  onChange?: (e: ChangeEvent<HTMLInputElement> | FocusEvent) => void;
}
