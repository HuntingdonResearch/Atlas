import { ClassNameFunc } from '../../types/ClassNameFunc';
import { ResetInputProps } from './props';

export const classNames: ClassNameFunc<ResetInputProps> = (strings: TemplateStringsArray, props: ResetInputProps): string => {
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
