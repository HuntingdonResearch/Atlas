import { ClassNameFunc } from '../../../types/ClassNameFunc';
import { TableRowProps } from './props';

export const classNames: ClassNameFunc<TableRowProps> = (strings: TemplateStringsArray, props: TableRowProps): string => {
  const classNames: string = [
    props.className || null
  ]
    .concat(
      [
        props.selected ? `is-selected` : null
      ]
    )
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
