import { ClassNameFunc } from '../../../types/ClassNameFunc';
import { HeroFootProps } from './props';

export const classNames: ClassNameFunc<HeroFootProps> = (strings: TemplateStringsArray, props: HeroFootProps): string => {
  const classNames: string = [
    'hero-foot',
    props.className || null
  ]
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
