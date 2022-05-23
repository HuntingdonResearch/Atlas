import { ClassNameFunc } from '../../types/ClassNameFunc';
import { TextProps } from './props';

export const classNames: ClassNameFunc<TextProps> = (strings: TemplateStringsArray, props: TextProps): string => {
  const classNames: string = [
    props.className || null
  ]
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
