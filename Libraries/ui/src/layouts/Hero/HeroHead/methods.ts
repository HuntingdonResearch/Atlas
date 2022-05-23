import { ClassNameFunc } from '../../../types/ClassNameFunc';
import { HeroHeadProps } from './props';

export const classNames: ClassNameFunc<HeroHeadProps> = (strings: TemplateStringsArray, props: HeroHeadProps): string => {
  const classNames: string = [
    'hero-head',
    props.className || null
  ]
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
