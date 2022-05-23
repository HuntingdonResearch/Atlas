import { ClassNameFunc } from '../../types/ClassNameFunc';
import { DropdownProps } from './props';

export const classNames: ClassNameFunc<DropdownProps> = (strings: TemplateStringsArray, props: DropdownProps): string => {
  const classNames: string = [
    'dropdown',
    props.className || null
  ]
    .concat(
      [
        props.active ? `is-active` : null,
        props.hoverable ? `is-hoverable` : null,
        props.alignment ? `is-${props.alignment}` : null,
        props.direction ? `is-${props.direction}` : null
      ]
    )
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
