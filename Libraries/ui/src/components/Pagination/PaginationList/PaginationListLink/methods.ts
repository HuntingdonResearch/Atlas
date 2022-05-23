import { ClassNameFunc } from '../../../../types/ClassNameFunc';
import { PaginationListLinkProps } from './props';

export const classNames: ClassNameFunc<PaginationListLinkProps> = (strings: TemplateStringsArray, props: PaginationListLinkProps): string => {
  const classNames: string = [
    'pagination-link',
    props.className || null
  ]
    .concat(
      [
        props.current ? `is-current` : null
      ]
    )
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
