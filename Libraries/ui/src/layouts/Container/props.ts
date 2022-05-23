export interface ContainerProps {
  className?: string;

  as?: string;

  fluid?: boolean;

  size?:
    | 'widescreen'
    | 'fullhd'
    | 'max-desktop'
    | 'max-widescreen';
}
