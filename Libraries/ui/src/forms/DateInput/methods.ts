import { ClassNameFunc } from '../../types/ClassNameFunc';
import { DateInputProps } from './props';

export const classNames: ClassNameFunc<DateInputProps> = (strings: TemplateStringsArray, props: DateInputProps): string => {
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
