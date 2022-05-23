import { ClassNameFunc } from '../../../types/ClassNameFunc';
import { MediaLeftProps } from './props';

export const classNames: ClassNameFunc<MediaLeftProps> = (strings: TemplateStringsArray, props: MediaLeftProps): string => {
  const classNames: string = [
    'media-left',
    props.className || null
  ]
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
