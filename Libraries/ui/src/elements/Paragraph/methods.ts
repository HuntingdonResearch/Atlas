import { ClassNameFunc } from '../../types/ClassNameFunc';
import { ParagraphProps } from './props';

export const classNames: ClassNameFunc<ParagraphProps> = (strings: TemplateStringsArray, props: ParagraphProps): string => {
  const classNames: string = [
    props.className || null
  ]
    .concat(
      [
        props.style ? `is-${props.style}` : null,
        props.italic ? `is-italic` : null,
        props.underlined ? `is-underlined` : null,
        props.heading ? `heading` : null,
        props.textColor ? `has-text-${props.textColor}` : null,
        props.backColor ? `has-background-${props.backColor}` : null,
        props.weight ? `has-text-${props.weight}` : null,
        props.alignment ? `has-text-${props.alignment}` : null,
        props.family ? `is-family-${props.family}` : null,
        props.size ? `is-size-${props.size}` : null,
        props.widths && props.alignment
          ? props.widths.map((width) => `has-text-${props.alignment}-${width}`).join(' ')
          : null,
        props.sizes ? props.sizes.map((size) => `is-size-${size}`).join(' ') : null
      ]
    )
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
