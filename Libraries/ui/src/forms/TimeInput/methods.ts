import { ClassNameFunc } from '../../types/ClassNameFunc';
import { TimeInputProps } from './props';

export const classNames: ClassNameFunc<TimeInputProps> = (strings: TemplateStringsArray, props: TimeInputProps): string => {
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
