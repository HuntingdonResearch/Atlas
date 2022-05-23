import { IconCollection } from '../../types/IconCollection';
import { WhenFunc } from '../../types/WhenFunc';

export interface IconProps {
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
    | 'normal'
    | 'medium'
    | 'large';

  scale?:
    | 'xs'
    | 'sm'
    | 'lg'
    | 'xl'
    | '2x';

  tooltip?: string;

  children?: string;

  when?: boolean | WhenFunc;
}
