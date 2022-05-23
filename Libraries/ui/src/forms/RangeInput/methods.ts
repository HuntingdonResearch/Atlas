import { ClassNameFunc } from '../../types/ClassNameFunc';
import { RangeInputProps } from './props';

export const classNames: ClassNameFunc<RangeInputProps> = (strings: TemplateStringsArray, props: RangeInputProps): string => {
  const classNames: string = [
    'input',
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
