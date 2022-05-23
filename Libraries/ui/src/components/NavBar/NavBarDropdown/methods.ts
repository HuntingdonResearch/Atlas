import { ClassNameFunc } from '../../../types/ClassNameFunc';
import { NavBarDropdownProps } from './props';

export const classNames: ClassNameFunc<NavBarDropdownProps> = (strings: TemplateStringsArray, props: NavBarDropdownProps): string => {
  const classNames: string = [
    'navbar-dropdown',
    props.className || null
  ]
    .concat(
      [
        props.boxed ? `is-boxed` : null
      ]
    )
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
