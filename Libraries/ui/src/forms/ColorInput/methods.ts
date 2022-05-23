import { ClassNameFunc } from '../../types/ClassNameFunc';
import { ColorInputProps } from './props';

export const classNames: ClassNameFunc<ColorInputProps> = (strings: TemplateStringsArray, props: ColorInputProps): string => {
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
