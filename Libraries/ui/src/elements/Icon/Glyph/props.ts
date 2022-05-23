import { ReactNode } from 'react';
import { IconCollection } from '../../../types/IconCollection';

export interface GlyphProps {
  className?: string;

  children?: ReactNode;

  collection: IconCollection;

  name: string;

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
}
