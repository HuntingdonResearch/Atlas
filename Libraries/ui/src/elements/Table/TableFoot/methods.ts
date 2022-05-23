import { ClassNameFunc } from '../../../types/ClassNameFunc';
import { TableFootProps } from './props';

export const classNames: ClassNameFunc<TableFootProps> = (strings: TemplateStringsArray, props: TableFootProps): string => {
  const classNames: string = [
    props.className || null
  ]
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
