import { ReactNode } from 'react';
import { BackColor } from '../../types/BackColor';
import { TextColor } from '../../types/TextColor';

export interface AnchorProps {
  className?: string;

  as?: string;

  href?: string;

  textColor?: TextColor;

  backColor?: BackColor;

  children?: ReactNode;
}
