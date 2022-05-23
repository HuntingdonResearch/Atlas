import { ClassNameFunc } from '../../../types/ClassNameFunc';
import { HeroBodyProps } from './props';

export const classNames: ClassNameFunc<HeroBodyProps> = (strings: TemplateStringsArray, props: HeroBodyProps): string => {
  const classNames: string = [
    'hero-body',
    props.className || null
  ]
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
