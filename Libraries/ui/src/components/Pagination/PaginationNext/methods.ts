import { ClassNameFunc } from '../../../types/ClassNameFunc';
import { PaginationNextProps } from './props';

export const classNames: ClassNameFunc<PaginationNextProps> = (strings: TemplateStringsArray, props: PaginationNextProps): string => {
  const classNames: string = [
    'pagination-next',
    props.className || null
  ]
    .concat(
      [
        props.disabled ? `is-disabled` : null
      ]
    )
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
