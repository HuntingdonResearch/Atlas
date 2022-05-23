import { ClassNameFunc } from '../../../types/ClassNameFunc';
import { TableColumnProps } from './props';

export const classNames: ClassNameFunc<TableColumnProps> = (strings: TemplateStringsArray, props: TableColumnProps): string => {
  const classNames: string = [
    props.className || null
  ]
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
