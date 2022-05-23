import { ClassNameFunc } from '../../types/ClassNameFunc';
import { SectionProps } from './props';

export const classNames: ClassNameFunc<SectionProps> = (strings: TemplateStringsArray, props: SectionProps): string => {
  const classNames: string = [
    'section',
    props.className || null
  ]
    .concat(
      [
        props.spacing ? `is-${props.spacing}` : null
      ]
    )
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
