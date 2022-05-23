import { ClassNameFunc } from '../../../types/ClassNameFunc';
import { BreadcrumbItemProps } from './props';

export const classNames: ClassNameFunc<BreadcrumbItemProps> = (strings: TemplateStringsArray, props: BreadcrumbItemProps): string => {
  const classNames: string = [
    props.className || null
  ]
    .concat(
      [
        props.active ? `is-active` : null
      ]
    )
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
