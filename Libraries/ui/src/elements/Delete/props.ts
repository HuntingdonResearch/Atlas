export interface DeleteProps {
  className?: string;

  as?: string;

  size?:
    | 'small'
    | 'normal'
    | 'medium'
    | 'large';

  onClick?: (e: MouseEvent) => void;
}
