import { ClassNameFunc } from '../../types/ClassNameFunc';
import { MonthInputProps } from './props';

export const classNames: ClassNameFunc<MonthInputProps> = (strings: TemplateStringsArray, props: MonthInputProps): string => {
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
