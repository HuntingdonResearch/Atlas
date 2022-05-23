import { ClassNameFunc } from '../../types/ClassNameFunc';
import { MediaProps } from './props';

export const classNames: ClassNameFunc<MediaProps> = (strings: TemplateStringsArray, props: MediaProps): string => {
  const classNames: string = [
    'media',
    props.className || null
  ]
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
