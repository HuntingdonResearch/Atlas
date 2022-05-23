export interface ProgressProps {
  className?: string;

  value?: number;

  max?: number;

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
    | 'white';

  size?:
    | 'small'
    | 'normal'
    | 'medium'
    | 'large';

  children: string;
}
