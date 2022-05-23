import { ClassNameFunc } from '../../types/ClassNameFunc';
import { TileProps } from './props';

export const classNames: ClassNameFunc<TileProps> = (strings: TemplateStringsArray, props: TileProps): string => {
  const classNames: string = [
    'tile',
    props.className || null
  ]
    .concat(
      [
        props.context ? `is-${props.context}` : null,
        props.direction ? `is-${props.direction}` : null,
        props.size ? `is-${props.size}` : null,
      ]
    )
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
}
