import { ClassNameFunc } from '../../types/ClassNameFunc';
import { ImageProps } from './props';

export const classNames: ClassNameFunc<ImageProps> = (strings: TemplateStringsArray, props: ImageProps): string => {
  const classNames: string = [
    'image',
    props.className || null
  ]
    .concat(
      [
        props.size ? `is-${props.size}` : null,
        props.fullwidth ? `is-fullwidth` : null
      ]
    )
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
}
