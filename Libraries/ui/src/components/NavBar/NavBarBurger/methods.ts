import { ClassNameFunc } from '../../../types/ClassNameFunc';
import { NavBarBurgerProps } from './props';

export const classNames: ClassNameFunc<NavBarBurgerProps> = (strings: TemplateStringsArray, props: NavBarBurgerProps): string => {
  const classNames: string = [
    'navbar-burger',
    props.className || null
  ]
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
