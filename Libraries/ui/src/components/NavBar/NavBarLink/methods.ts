import { ClassNameFunc } from '../../../types/ClassNameFunc';
import { NavBarLinkProps } from './props';

export const classNames: ClassNameFunc<NavBarLinkProps> = (strings: TemplateStringsArray, props: NavBarLinkProps): string => {
  const classNames: string = [
    'navbar-link',
    props.className || null
  ]
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
