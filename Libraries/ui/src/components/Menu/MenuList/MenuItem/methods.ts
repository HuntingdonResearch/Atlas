import { ClassNameFunc } from '../../../../types/ClassNameFunc';
import { MenuItemProps } from './props';

export const classNames: ClassNameFunc<MenuItemProps> = (strings: TemplateStringsArray, props: MenuItemProps): string => {
  const classNames: string = [
    props.className || null
  ]
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
}
