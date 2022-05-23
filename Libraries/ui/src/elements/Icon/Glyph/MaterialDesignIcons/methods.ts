import { ClassNameFunc } from '../../../../types/ClassNameFunc';
import { IconCollection } from '../../../../types/IconCollection';
import { GlyphProps } from '../props';

export const classNames: ClassNameFunc<GlyphProps> = (strings: TemplateStringsArray, props: GlyphProps): string => {
  const classNames: string = [
    props['collection'],
    props.className || null
  ]
    .concat(
      [
        props.name ? `mdi-${props.name}` : null,
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
      if (!scale) return null;
      else if (scale === 'xs') return 'mdi-18px';
      else if (scale === 'sm') return 'mdi-24px';
      else if (scale === 'lg') return 'mdi-36px';
      else return null;

    case 'large':
      if (!scale) return null;
      else if (scale === 'xs') return 'mdi-18px';
      else if (scale === 'sm') return 'mdi-24px';
      else if (scale === 'lg') return 'mdi-36px';
      else if (scale === '2x') return 'mdi-48px';
      else return null;

    case 'normal':
    default:
      if (!scale) return null;
      else if (scale === 'xs') return 'mdi-18px';
      else if (scale === 'sm') return 'mdi-24px';
      else return null;
  }
}

export function isMaterialDesignIconsCollection(collection: IconCollection): boolean {
  return collection === 'mdi';
}
