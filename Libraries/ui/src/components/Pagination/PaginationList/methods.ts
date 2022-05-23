import { ClassNameFunc } from '../../../types/ClassNameFunc';
import { PaginationListProps } from './props';

export const classNames: ClassNameFunc<PaginationListProps> = (strings: TemplateStringsArray, props: PaginationListProps): string => {
  const classNames: string = [
    'pagination-list',
    props.className || null
  ]
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
