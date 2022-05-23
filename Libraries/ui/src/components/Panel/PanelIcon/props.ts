import { ReactNode } from 'react';
import { IconCollection } from '../../../types/IconCollection';
import { WhenFunc } from '../../../types/WhenFunc';

export interface PanelIconProps {
  className?: string;

  name: string;

  collection?: IconCollection;

  color?:
    | 'black'
    | 'white'
    | 'dark'
    | 'light'
    | 'primary'
    | 'link'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger';

  position?:
    | 'right'
    | 'left';

  size?:
    | 'small'
    | 'medium'
    | 'large';

  scale?:
    | 'xs'
    | 'sm'
    | 'lg';

  when?: boolean | WhenFunc;

  'data-tooltip'?: string;

  children?: ReactNode;
}
