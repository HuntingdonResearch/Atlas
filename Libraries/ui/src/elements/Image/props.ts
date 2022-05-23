import { ReactNode } from 'react';

export interface ImageProps {
  className?: string;

  as?: string;

  size?:
    | '16x16'
    | '24x24'
    | '32x32'
    | '48x48'
    | '64x64'
    | '96x96'
    | '128x128'
    | 'square'
    | '1by1'
    | '5by4'
    | '4by5'
    | '4by3'
    | '3by4'
    | '3by2'
    | '2by3'
    | '5by3'
    | '3by5'
    | '16by9'
    | '9by16'
    | '2by1'
    | '1by2'
    | '3by1'
    | '1by3';

  rounded?: boolean;

  fullwidth?: boolean;

  children?: ReactNode;
}
