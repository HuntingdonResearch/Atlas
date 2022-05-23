import { ClassNameFunc } from '../../../types/ClassNameFunc';
import { TableHeadProps } from './props';

export const classNames: ClassNameFunc<TableHeadProps> = (strings: TemplateStringsArray, props: TableHeadProps): string => {
  const classNames: string = [
    props.className || null
  ]
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
