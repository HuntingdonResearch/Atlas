import { ClassNameFunc } from '../../types/ClassNameFunc';
import { FieldLabelProps } from './props';

export const classNames: ClassNameFunc<FieldLabelProps> = (strings: TemplateStringsArray, props: FieldLabelProps): string => {
  const classNames: string = [
    'field-label',
    props.className || null
  ]
    .concat(
      [
        props.alignment ? `is-${props.alignment}` : null
      ]
    )
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
