import { ChangeEvent } from 'react';

export interface DateInputProps {
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

  disabled?: boolean;

  onChange?: (e: ChangeEvent<HTMLInputElement> | FocusEvent) => void;
}
