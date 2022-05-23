import { ClassNameFunc } from '../../types/ClassNameFunc';
import { TextInputProps } from './props';

export const classNames: ClassNameFunc<TextInputProps> = (strings: TemplateStringsArray, props: TextInputProps): string => {
  const classNames: string = [
    'input',
    props.className || null
  ]
    .concat(
      [
        props.color ? `is-${props.color}` : null,
        props.size ? `is-${props.size}` : null,
        props.static ? `is-static` : null
      ]
    )
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
