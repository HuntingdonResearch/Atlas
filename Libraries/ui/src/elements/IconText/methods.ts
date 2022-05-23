import { ClassNameFunc } from '../../types/ClassNameFunc';
import { IconTextProps } from './props';

export const classNames: ClassNameFunc<IconTextProps> = (strings: TemplateStringsArray, props: IconTextProps): string => {
  const classNames: string = [
    'icon-text',
    props.className || null
  ]
    .concat(
      [
        props.color ? `has-text-${props.color}` : null,
        props.size ? `are-${props.size}` : null
      ]
    )
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
