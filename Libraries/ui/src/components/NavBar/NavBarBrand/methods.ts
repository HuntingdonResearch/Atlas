import { ClassNameFunc } from '../../../types/ClassNameFunc';
import { NavBarBrandProps } from './props';

export const classNames: ClassNameFunc<NavBarBrandProps> = (strings: TemplateStringsArray, props: NavBarBrandProps): string => {
  const classNames: string = [
    'navbar-brand',
    props.className || null
  ]
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
