import { ClassNameFunc } from '../../types/ClassNameFunc';
import { SubtitleProps } from './props';

export const classNames: ClassNameFunc<SubtitleProps> = (strings: TemplateStringsArray, props: SubtitleProps): string => {
  const classNames: string = [
    'subtitle',
    props.className || null
  ]
    .concat(
      [
        props.size ? `is-${props.size}` : null,
        props.textColor ? `has-text-${props.textColor}` : null,
        props.backColor ? `has-background-${props.backColor}` : null
      ]
    )
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
