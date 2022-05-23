import { ClassNameFunc } from '../../types/ClassNameFunc';
import { TitleProps } from './props';

export const classNames: ClassNameFunc<TitleProps> = (strings: TemplateStringsArray, props: TitleProps): string => {
  const classNames: string = [
    'title',
    props.className || null
  ]
    .concat(
      [
        props.size ? `is-${props.size}` : null,
        props.textColor ? `has-text-${props.textColor}` : null,
        props.backColor ? `has-background-${props.backColor}` : null,
        props.spaced ? `is-spaced` : null
      ]
    )
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
