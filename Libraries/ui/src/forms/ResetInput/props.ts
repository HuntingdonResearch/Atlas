export interface ResetInputProps {
  className?: string;

  name: string;

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

  defaultValue?: string;

  disabled?: boolean;

  children?: string;

  onClick?: (e: MouseEvent) => void;
}
