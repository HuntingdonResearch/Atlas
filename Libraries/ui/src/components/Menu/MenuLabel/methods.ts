import { ClassNameFunc } from '../../../types/ClassNameFunc';
import { MenuLabelProps } from './props';

export const classNames: ClassNameFunc<MenuLabelProps> = (strings: TemplateStringsArray, props: MenuLabelProps): string => {
  const classNames: string = [
    'menu-label',
    props.className || null
  ]
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
}
