import { ClassNameFunc } from '../../types/ClassNameFunc';
import { BoxProps } from './props';

export const classNames: ClassNameFunc<BoxProps> = (strings: TemplateStringsArray, props: BoxProps): string => {
  const classNames: string = [
    'box',
    props.className || null
  ]
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
