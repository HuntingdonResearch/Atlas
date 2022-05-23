import { ClassNameFunc } from '../../../types/ClassNameFunc';
import { TableBodyProps } from './props';

export const classNames: ClassNameFunc<TableBodyProps> = (strings: TemplateStringsArray, props: TableBodyProps): string => {
  const classNames: string = [
    props.className || null
  ]
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
