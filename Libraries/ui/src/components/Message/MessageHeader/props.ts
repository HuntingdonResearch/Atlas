export interface MessageHeaderProps {
  className?: string;

  delete?: boolean;

  onDelete?: (e: MouseEvent) => void;

  children?: string;
}
