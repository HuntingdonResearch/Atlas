import { ClassNameFunc } from '../../../types/ClassNameFunc';
import { MediaContentProps } from './props';

export const classNames: ClassNameFunc<MediaContentProps> = (strings: TemplateStringsArray, props: MediaContentProps): string => {
  const classNames: string = [
    'media-content',
    props.className || null
  ]
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
