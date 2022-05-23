import { ClassNameFunc } from '../../types/ClassNameFunc';
import { ContentProps } from './props';

export const classNames: ClassNameFunc<ContentProps> = (strings: TemplateStringsArray, props: ContentProps): string => {
  const classNames: string = [
    'content',
    props.className || null
  ]
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
