import { ClassNameFunc } from '../../../../types/ClassNameFunc';
import { CardFooterItemProps } from './props';

export const classNames: ClassNameFunc<CardFooterItemProps> = (strings: TemplateStringsArray, props: CardFooterItemProps): string => {
  const classNames: string = [
    'card-footer-item',
    props.className || null
  ]
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
