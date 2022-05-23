import { ClassNameFunc } from '../../../types/ClassNameFunc';
import { NavBarAnchorProps } from './props';

export const classNames: ClassNameFunc<NavBarAnchorProps> = (strings: TemplateStringsArray, props: NavBarAnchorProps): string => {
  const classNames: string = [
    'navbar-link',
    props.className || null
  ]
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
