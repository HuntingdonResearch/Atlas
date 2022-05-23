export interface ColumnsProps {
  className?: string;

  as?: string;

  centered?: boolean;

  vcentered?: boolean;

  breakpoint?:
    | 'mobile'
    | 'desktop';

  gap?:
    | 0
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8;

  multiline?: boolean;
}
