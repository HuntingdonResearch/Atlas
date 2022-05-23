export interface ModalCloseProps {
  className?: string;

  size?:
    | 'small'
    | 'medium'
    | 'large';

  onClick?: (e: any) => void;
}
