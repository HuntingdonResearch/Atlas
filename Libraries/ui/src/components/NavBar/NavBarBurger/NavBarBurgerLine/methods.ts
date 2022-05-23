import { ClassNameFunc } from '../../../../types';
import { NavBarBurgerLineProps } from './props';

export const classNames: ClassNameFunc<NavBarBurgerLineProps> = (strings: TemplateStringsArray, props: NavBarBurgerLineProps): string => {
  const classNames: string = [
    props.className || null
  ]
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
