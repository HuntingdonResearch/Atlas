import { ReactNode } from 'react';

export interface ButtonProps {
  className?: string;

  as?: string;

  fullwidth?: boolean;

  selected?: boolean;

  inverted?: boolean;

  outlined?: boolean;

  rounded?: boolean;

  hovered?: boolean;

  focused?: boolean;

  active?: boolean;

  loading?: boolean;

  static?: boolean;

  light?: boolean;

  burger?: boolean;

  color?:
    | 'dark'
    | 'light'
    | 'primary'
    | 'link'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger'
    | 'black'
    | 'white'
    | 'text'
    | 'ghost';

  size?:
    | 'small'
    | 'normal'
    | 'medium'
    | 'large';

  disabled?: boolean;

  children?: ReactNode;

  onClick?: (e: any) => any;
}
