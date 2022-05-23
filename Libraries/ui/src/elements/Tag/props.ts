export interface TagProps {
  className?: string;

  as?: string;

  rounded?: boolean;

  delete?: boolean;

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

  light?: boolean;

  size?:
    | 'normal'
    | 'medium'
    | 'large';

  children?: string;

  onDismiss?: (e: MouseEvent) => void;
}
