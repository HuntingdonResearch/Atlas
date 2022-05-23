import { ClassNameFunc } from '../../types/ClassNameFunc';
import { IconProps } from './props';

export const classNames: ClassNameFunc<IconProps> = (strings: TemplateStringsArray, props: IconProps): string => {
  const classNames: string = [
    'icon',
    props.className || null
  ]
    .concat(
      [
        props.color ? `has-text-${props.color}` : null,
        props.size ? `is-${props.size}` : null,
        props.position ? `is-${props.position}` : null
      ]
    )
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
