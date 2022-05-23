import { ChangeEvent } from 'react';

export interface TextInputProps {
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

  static?: boolean;

  pattern?: string;

  disabled?: boolean;

  onChange?: (e: ChangeEvent<HTMLInputElement> | FocusEvent) => void;
}
