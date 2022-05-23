import { ClassNameFunc } from '../../../../types/ClassNameFunc';
import { IconCollection } from '../../../../types/IconCollection';
import { GlyphProps } from '../props';

export const classNames: ClassNameFunc<GlyphProps> = (strings: TemplateStringsArray, props: GlyphProps): string => {
  const classNames: string = [
    props['collection'] || 'fa',
    props.className || null
  ]
    .concat(
      [
        props.name ? `fa-${props.name}` : null,
        getSizeAndScale(props.size, props.scale)
      ]
    )
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};

function getSizeAndScale(size: string = 'normal', scale?: string): string | null {
  switch (size) {
    case 'small':
      return null;

    case 'medium':
    case 'large':
      if (scale === 'lg' || scale === 'xl') return 'fa-lg';
      else if (scale === '2x') return 'fa-2x';
      else return null;

    case 'normal':
    default:
      if (scale === 'lg' || scale === 'xl' || scale === '2x') return 'fa-lg';
      else return null;
  }
}

export function isFontAwesomeCollection(collection: IconCollection): boolean {
  return collection === 'fa' || collection === 'fal' || collection === 'far' || collection === 'fas' || collection === 'fab';
}
