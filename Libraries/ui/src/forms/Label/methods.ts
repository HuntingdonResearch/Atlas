import { ClassNameFunc } from '../../types/ClassNameFunc';
import { LabelProps } from './props';

export const classNames: ClassNameFunc<LabelProps> = (strings: TemplateStringsArray, props: LabelProps): string => {
  const classNames: string = [
    'label',
    props.className || null
  ]
    .concat(
      [
        props.size ? `is-${props.size}` : null
      ]
    )
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
