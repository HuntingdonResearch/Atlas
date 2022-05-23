import { ClassNameFunc } from '../../../types/ClassNameFunc';
import { TableHeadingProps } from './props';

export const classNames: ClassNameFunc<TableHeadingProps> = (strings: TemplateStringsArray, props: TableHeadingProps): string => {
  const classNames: string = [
    props.className || null
  ]
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
