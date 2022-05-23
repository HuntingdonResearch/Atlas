import { BackColor } from '../../types/BackColor';
import { TextColor } from '../../types/TextColor';

export interface ParagraphProps {
  className?: string;

  textColor?: TextColor;

  backColor?: BackColor;

  size?:
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6;

  alignment?:
    | 'left'
    | 'right'
    | 'justified'
    | 'centered';

  widths?:
    (
      | 'mobile'
      | 'tablet'
      | 'tablet-only'
      | 'touch'
      | 'desktop'
      | 'desktop-only'
      | 'widescreen'
      | 'widescreen-only'
      | 'fullhd'
    )[];

  sizes?:
    (
      | '1'
      | '2'
      | '3'
      | '4'
      | '5'
      | '6'
    )[];

  weight?:
    | 'light'
    | 'normal'
    | 'medium'
    | 'semibold'
    | 'bold';

  family?:
    | 'sans-serif'
    | 'monospace'
    | 'primary'
    | 'secondary'
    | 'code';

  style?:
    | 'capitalized'
    | 'lowercase'
    | 'uppercase';

  italic?: boolean;

  underlined?: boolean;

  heading?: boolean;
}
