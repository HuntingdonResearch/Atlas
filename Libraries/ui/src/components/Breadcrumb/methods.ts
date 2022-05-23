import { ClassNameFunc } from '../../types/ClassNameFunc';
import { BreadcrumbProps } from './props';

export const classNames: ClassNameFunc<BreadcrumbProps> = (strings: TemplateStringsArray, props: BreadcrumbProps): string => {
  const classNames: string = [
    'breadcrumb',
    props.className || null
  ]
    .concat(
      [
        props.alignment && props.alignment !== 'left' ? `is-${props.alignment}` : null,
        props.size ? `is-${props.size}` : null,
        props.separator ? `has-${props.separator}-separator` : null
      ]
    )
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
