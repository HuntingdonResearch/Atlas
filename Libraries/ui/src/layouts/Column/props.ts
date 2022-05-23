export interface ColumnProps {
  className?: string;

  as?: string;

  narrow?:
    | boolean
    | 'mobile'
    | 'tablet'
    | 'touch'
    | 'desktop'
    | 'widescreen'
    | 'fullhd';

  size?:
    | 'full'
    | 'three-quarters'
    | 'two-thirds'
    | 'half'
    | 'one-third'
    | 'one-quarter'
    | 'four-fifths'
    | 'three-fifths'
    | 'two-fifths'
    | 'one-fifth'
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12;

  offset?:
    | 'full'
    | 'three-quarters'
    | 'two-thirds'
    | 'half'
    | 'one-third'
    | 'one-quarter'
    | 'four-fifths'
    | 'three-fifths'
    | 'two-fifths'
    | 'one-fifth'
    | 0
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12;
}
