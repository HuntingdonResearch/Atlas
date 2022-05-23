import { ClassNameFunc } from '../../../types/ClassNameFunc';
import { CardImageProps } from './props';

export const classNames: ClassNameFunc<CardImageProps> = (strings: TemplateStringsArray, props: CardImageProps): string => {
  const classNames: string = [
    'card-image',
    props.className || null
  ]
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
