import { ClassNameFunc } from '../../../types/ClassNameFunc';
import { NavBarItemProps } from './props';

export const classNames: ClassNameFunc<NavBarItemProps & { hasDropdown: boolean }> = (strings: TemplateStringsArray, props: NavBarItemProps & { hasDropdown: boolean }): string => {
  const classNames: string = [
    'navbar-item',
    props.className || null
  ]
    .concat(
      [
        props.hasDropdown ? 'has-dropdown' : null,
        props.hoverable ? 'is-hoverable' : null,
        props.active ? 'is-active' : null
      ]
    )
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
