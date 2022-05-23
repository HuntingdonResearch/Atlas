import { ClassNameFunc } from '../../types/ClassNameFunc';
import { CardProps } from './props';

export const classNames: ClassNameFunc<CardProps> = (strings: TemplateStringsArray, props: CardProps): string => {
  const classNames: string = [
    'card',
    props.className || null
  ]
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
