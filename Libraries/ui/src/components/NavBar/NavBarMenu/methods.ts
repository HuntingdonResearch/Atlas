import { ClassNameFunc } from '../../../types/ClassNameFunc';
import { NavBarMenuProps } from './props';

export const classNames: ClassNameFunc<NavBarMenuProps & { isActive: boolean }> = (strings: TemplateStringsArray, props: NavBarMenuProps & { isActive: boolean }): string => {
  const classNames: string = [
    'navbar-menu',
    props.className || null
  ]
    .concat(
      [
        props.isActive ? 'is-active' : null
      ]
    )
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
