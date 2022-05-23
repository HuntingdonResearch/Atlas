import { ClassNameFunc } from '../../../types/ClassNameFunc';
import { CardHeaderProps } from './props';

export const classNames: ClassNameFunc<CardHeaderProps> = (strings: TemplateStringsArray, props: CardHeaderProps): string => {
  const classNames: string = [
    'card-header',
    props.className || null
  ]
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};

export const titleClassNames: ClassNameFunc<CardHeaderProps> = (strings: TemplateStringsArray, props: CardHeaderProps): string => {
  const classNames: string = [
    'card-header-title'
  ]
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};

export const iconClassNames: ClassNameFunc<CardHeaderProps> = (strings: TemplateStringsArray, props: CardHeaderProps): string => {
  const classNames: string = [
    'card-header-icon'
  ]
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
