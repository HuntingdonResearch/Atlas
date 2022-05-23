import { ClassNameFunc } from '../../types/ClassNameFunc';
import { TableProps } from './props';

export const classNames: ClassNameFunc<TableProps> = (strings: TemplateStringsArray, props: TableProps): string => {
  const classNames: string = [
    'table',
    props.className || null
  ]
    .concat(
      [
        props.bordered ? `is-bordered` : null,
        props.striped ? `is-striped` : null,
        props.narrow ? `is-narrow` : null,
        props.fullwidth ? `is-fullwidth` : null,
        props.hoverable ? `is-hoverable` : null
      ]
    )
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
