import { ClassNameFunc } from '../../../types/ClassNameFunc';
import { NavBarDividerProps } from './props';

export const classNames: ClassNameFunc<NavBarDividerProps> = (strings: TemplateStringsArray, props: NavBarDividerProps): string => {
  const classNames: string = [
    'navbar-divider',
    props.className || null
  ]
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
