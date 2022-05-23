import { ClassNameFunc } from '../../types/ClassNameFunc';
import { TagProps } from './props';

export const classNames: ClassNameFunc<TagProps> = (strings: TemplateStringsArray, props: TagProps): string => {
  const classNames: string = [
    'tag',
    props.className || null
  ]
    .concat(
      [
        props.rounded ? `is-rounded` : null,
        props.delete ? `is-delete` : null,
        props.color ? `is-${props.color}` : null,
        props.light ? `is-light` : null,
        props.size ? `is-${props.size}` : null
      ]
    )
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
