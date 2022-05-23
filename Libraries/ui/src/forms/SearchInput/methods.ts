import { ClassNameFunc } from '../../types/ClassNameFunc';
import { SearchInputProps } from './props';

export const classNames: ClassNameFunc<SearchInputProps> = (strings: TemplateStringsArray, props: SearchInputProps): string => {
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
