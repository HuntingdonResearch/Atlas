import { ClassNameFunc } from '../../types/ClassNameFunc';
import { FooterProps } from './props';

export const classNames: ClassNameFunc<FooterProps> = (strings: TemplateStringsArray, props: FooterProps): string => {
  const classNames: string = [
    'footer',
    props.className || null
  ]
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
