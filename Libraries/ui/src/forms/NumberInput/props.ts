import { ChangeEvent } from 'react';

export interface NumberInputProps {
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

  defaultValue?: number;

  min?: number;

  max?: number;

  step?: number;

  disabled?: boolean;

  onChange?: (e: ChangeEvent<HTMLInputElement> | FocusEvent) => void;
}
