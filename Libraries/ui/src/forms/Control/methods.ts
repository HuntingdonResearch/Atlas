import { isUndefined, isFunction } from 'lodash';
import { ClassNameFunc } from '../../types/ClassNameFunc';
import { ControlProps } from './props';

export const calculateWhen = (when: boolean | (() => boolean)) => {
  const result = isUndefined(when)
    ? true
    : isFunction(when)
      ? (when as (() => boolean))()
      : when;

  return result;
};

export const classNames: ClassNameFunc<ControlProps & { icons: 'both' | 'left' | 'right' | 'none' }> = (strings: TemplateStringsArray, props: ControlProps & { icons: 'both' | 'left' | 'right' | 'none' }): string => {
  const classNames: string = [
    'control',
    props.className || null
  ]
    .concat(
      [
        props.icons || props.icons === 'none'
          ? props.icons === 'both'
            ? `has-icons-left has-icons-right`
            : `has-icons-${props.icons}`
          : null,
        props.expanded ? `is-expanded` : null
      ]
    )
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
