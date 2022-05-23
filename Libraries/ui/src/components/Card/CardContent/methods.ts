import { ClassNameFunc } from '../../../types/ClassNameFunc';
import { CardContentProps } from './props';

export const classNames: ClassNameFunc<CardContentProps> = (strings: TemplateStringsArray, props: CardContentProps): string => {
  const classNames: string = [
    'card-content',
    props.className || null
  ]
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
