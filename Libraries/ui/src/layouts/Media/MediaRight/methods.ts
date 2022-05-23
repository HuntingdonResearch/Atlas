import { ClassNameFunc } from '../../../types/ClassNameFunc';
import { MediaRightProps } from './props';

export const classNames: ClassNameFunc<MediaRightProps> = (strings: TemplateStringsArray, props: MediaRightProps): string => {
  const classNames: string = [
    'media-right',
    props.className || null
  ]
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
