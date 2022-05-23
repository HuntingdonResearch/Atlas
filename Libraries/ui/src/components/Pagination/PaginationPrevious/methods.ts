import { ClassNameFunc } from '../../../types/ClassNameFunc';
import { PaginationPreviousProps } from './props';

export const classNames: ClassNameFunc<PaginationPreviousProps> = (strings: TemplateStringsArray, props: PaginationPreviousProps): string => {
  const classNames: string = [
    'pagination-previous',
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
