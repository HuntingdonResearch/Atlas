import { ClassNameFunc } from '../../types/ClassNameFunc';
import { ButtonProps } from './props';

export const classNames: ClassNameFunc<ButtonProps> = (strings: TemplateStringsArray, props: ButtonProps): string => {
  const classNames: string = [
    'button',
    props.className || null
  ]
    .concat(
      [
        props.fullwidth ? `is-fullwidth` : null,
        props.selected ? `is-selected` : null,
        props.inverted ? `is-inverted` : null,
        props.outlined ? `is-outlined` : null,
        props.rounded ? `is-rounded` : null,
        props.hovered ? `is-hovered` : null,
        props.focused ? `is-focused` : null,
        props.active ? `is-active` : null,
        props.loading ? `is-loading` : null,
        props.static ? `is-static` : null,
        props.light ? `is-light` : null,
        props.color ? `is-${props.color}` : null,
        props.size ? `is-${props.size}` : null,
        props.burger ? `navbar-burger burger` : null
      ]
    )
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
