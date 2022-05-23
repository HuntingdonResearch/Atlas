import { ClassNameFunc } from '../../types/ClassNameFunc';
import { ProgressProps } from './props';

export const classNames: ClassNameFunc<ProgressProps> = (strings: TemplateStringsArray, props: ProgressProps): string => {
  const classNames: string = [
    'progress',
    props.className || null
  ]
    .concat(
      [
        props.color ? `is-${props.color}` : null,
        props.size ? `is-${props.size}` : null
      ]
    )
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
