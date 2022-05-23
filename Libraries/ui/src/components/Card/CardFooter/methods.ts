import { ClassNameFunc } from '../../../types/ClassNameFunc';
import { CardFooterProps } from './props';

export const classNames: ClassNameFunc<CardFooterProps> = (strings: TemplateStringsArray, props: CardFooterProps): string => {
  const classNames: string = [
    'card-footer',
    props.className || null
  ]
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
