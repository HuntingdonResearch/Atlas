import { ClassNameFunc } from '../../../../types/ClassNameFunc';
import { PaginationListEllipsisProps } from './props';

export const classNames: ClassNameFunc<PaginationListEllipsisProps> = (strings: TemplateStringsArray, props: PaginationListEllipsisProps): string => {
  const classNames: string = [
    'pagination-ellipsis',
    props.className || null
  ]
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
