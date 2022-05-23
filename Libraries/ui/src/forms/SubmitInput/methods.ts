import { ClassNameFunc } from '../../types/ClassNameFunc';
import { SubmitInputProps } from './props';

export const classNames: ClassNameFunc<SubmitInputProps> = (strings: TemplateStringsArray, props: SubmitInputProps): string => {
  const classNames: string = [
    'button',
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
