import { ClassNameFunc } from '../../types/ClassNameFunc';
import { TagsProps } from './props';

export const classNames: ClassNameFunc<TagsProps> = (strings: TemplateStringsArray, props: TagsProps): string => {
  const classNames: string = [
    'tags',
    props.className || null
  ]
    .concat(
      [
        props.addons ? `has-addons` : null,
        props.color ? `are-${props.color}` : null,
        props.light ? `are-light` : null,
        props.size ? `are-${props.size}` : null
      ]
    )
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
