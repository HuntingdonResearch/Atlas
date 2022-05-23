import { ClassNameFunc } from '../../types/ClassNameFunc';
import { PaginationProps } from './props';

export const classNames: ClassNameFunc<PaginationProps> = (strings: TemplateStringsArray, props: PaginationProps): string => {
  const classNames: string = [
    'pagination',
    props.className || null
  ]
    .concat(
      [
        props.rounded ? `is-rounded` : null,
        props.alignment && props.alignment !== 'left' ? `is-${props.alignment}` : null,
        props.size ? `is-${props.size}` : null
      ]
    )
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
