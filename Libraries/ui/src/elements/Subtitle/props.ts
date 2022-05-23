import { ReactNode } from 'react';
import { BackColor } from '../../types/BackColor';
import { TextColor } from '../../types/TextColor';

export interface SubtitleProps {
  className?: string;

  as?: string;

  size?:
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6;

  textColor?: TextColor;

  backColor?: BackColor;

  children?: ReactNode;
}
