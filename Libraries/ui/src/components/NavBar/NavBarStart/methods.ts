import { ClassNameFunc } from '../../../types/ClassNameFunc';
import { NavBarStartProps } from './props';

export const classNames: ClassNameFunc<NavBarStartProps> = (strings: TemplateStringsArray, props: NavBarStartProps): string => {
  const classNames: string = [
    'navbar-start',
    props.className || null
  ]
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
