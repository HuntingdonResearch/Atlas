import { isUndefined } from 'lodash';
import { ClassNameFunc } from '../../types/ClassNameFunc';
import { ColumnsProps } from './props';

const formatGap: (value: number | undefined) => string | null = (value: number | undefined): string | null => {
  if (isUndefined(value)) {
    return null;
  }

  switch (value) {
    case 0:
      return 'is-gapless';

    case 3:
      return null;

    default:
      return `is-variable is-${value}`;
  }
};

export const classNames: ClassNameFunc<ColumnsProps> = (strings: TemplateStringsArray, props: ColumnsProps): string => {
  const classNames: string = [
    'columns',
    props.className || null
  ]
    .concat(
      [
        props.centered ? `is-centered` : null,
        props.vcentered ? `is-vcentered` : null,
        props.multiline ? `is-multiline` : null,
        props.breakpoint ? `is-${props.breakpoint}` : null,
        formatGap(props.gap)
      ]
    )
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
