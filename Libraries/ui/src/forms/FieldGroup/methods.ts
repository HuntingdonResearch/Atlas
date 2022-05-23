import { ClassNameFunc } from '../../types/ClassNameFunc';
import { FieldGroupProps } from './props';

export const classNames: ClassNameFunc<FieldGroupProps> = (strings: TemplateStringsArray, props: FieldGroupProps): string => {
  const classNames: string = [
    'field-group',
    props.className || null
  ]
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
