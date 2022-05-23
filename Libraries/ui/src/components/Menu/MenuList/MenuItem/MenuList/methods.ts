import { ClassNameFunc } from '../../../../../types/ClassNameFunc';
import { MenuListProps } from './props';
import { MenuItemProps } from './props';

export const itemsClassNames: ClassNameFunc<MenuItemProps> = (strings: TemplateStringsArray, props: MenuItemProps): string => {
  const classNames: string = [
    props.className || null
  ]
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
}

export const listClassNames: ClassNameFunc<MenuListProps> = (strings: TemplateStringsArray, props: MenuListProps): string => {
  const classNames: string = [
    props.className || null
  ]
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
}
