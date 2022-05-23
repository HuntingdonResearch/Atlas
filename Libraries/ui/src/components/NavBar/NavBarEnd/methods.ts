import { ClassNameFunc } from '../../../types/ClassNameFunc';
import { NavBarEndProps } from './props';

export const classNames: ClassNameFunc<NavBarEndProps> = (strings: TemplateStringsArray, props: NavBarEndProps): string => {
  const classNames: string = [
    'navbar-end',
    props.className || null
  ]
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
