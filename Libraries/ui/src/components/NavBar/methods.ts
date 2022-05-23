import { ClassNameFunc } from '../../types/ClassNameFunc';
import { NavBarProps } from './props';

export const classNames: ClassNameFunc<NavBarProps> = (strings: TemplateStringsArray, props: NavBarProps): string => {
  const classNames: string = [
    'navbar',
    props.className || null
  ]
    .concat(
      [
        props.color ? `is-${props.color}` : null,
        props.transparent ? `is-transparent` : null,
        props.shadow ? `has-shadow` : null,
        props.spaced ? `is-spaced` : null,
        props.fixed ? `is-fixed-${props.fixed}` : null
      ]
    )
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
