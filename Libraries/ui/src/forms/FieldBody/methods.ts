import { ClassNameFunc } from '../../types/ClassNameFunc';
import { FieldBodyProps } from './props';

export const classNames: ClassNameFunc<FieldBodyProps> = (strings: TemplateStringsArray, props: FieldBodyProps): string => {
  const classNames: string = [
    'field-body',
    props.className || null
  ]
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
