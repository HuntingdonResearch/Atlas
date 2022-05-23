import { ClassNameFunc } from '../../types/ClassNameFunc';
import { ButtonsProps } from './props';

export const classNames: ClassNameFunc<ButtonsProps> = (strings: TemplateStringsArray, props: ButtonsProps): string => {
  const classNames: string = [
    'buttons',
    props.className || null
  ]
    .concat(
      [
        props.addons ? `has-addons` : null,
        props.alignment && props.alignment !== 'left' ? `is-${props.alignment}` : null,
        props.size ? `are-${props.size}` : null
      ]
    )
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
