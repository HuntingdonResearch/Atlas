import { ClassNameFunc } from '../../types/ClassNameFunc';
import { ColumnProps } from './props';

const formatNarrow: (value?: boolean | string) => string | null = (value?: boolean | string): string | null => {
  if (value === true || value === false) {
    return value ? `is-narrow` : null;
  }

  const breakpoint: string = value as string;

  if ([
    'mobile',
    'tablet',
    'touch',
    'desktop',
    'widescreen',
    'fullhd'
  ]
    .includes(breakpoint)) {
      return `is-narrow-${breakpoint}`;
    }

  return null;
};

export const classNames: ClassNameFunc<ColumnProps> = (strings: TemplateStringsArray, props: ColumnProps): string => {
  const classNames: string = [
    'column',
    props.className || null
  ]
    .concat(
      [
        formatNarrow(props.narrow),
        props.size ? `is-${props.size}` : null,
        props.offset ? `is-offset-${props.offset}` : null
      ]
    )
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
