import { ClassNameFunc } from '../../types/ClassNameFunc';
import { FieldProps } from './props';

export const classNames: ClassNameFunc<FieldProps & { 'has-addons': boolean }> = (strings: TemplateStringsArray, props: FieldProps): string => {
  const classNames: string = [
    'field',
    props.className || null
  ]
    .concat(
      [
        props.horizontal ? `is-horizontal` : null,
        props.grouped ? `is-grouped` : null,
        props.alignment ? `is-grouped-${props.alignment}` : null,
        props.addons ? `has-addons` : null
      ]
    )
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
