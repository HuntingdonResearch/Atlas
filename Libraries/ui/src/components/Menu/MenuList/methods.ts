import { ClassNameFunc } from '../../../types/ClassNameFunc';
import { MenuListProps } from './props';

export const classNames: ClassNameFunc<MenuListProps> = (strings: TemplateStringsArray, props: MenuListProps): string => {
  const classNames: string = [
    'menu-list',
    props.className || null
  ]
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
}
