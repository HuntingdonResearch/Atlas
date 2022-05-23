import { ClassNameFunc } from '../../types/ClassNameFunc';
import { MenuProps } from './props';

export const classNames: ClassNameFunc<MenuProps> = (strings: TemplateStringsArray, props: MenuProps): string => {
  const classNames: string = [
    'menu',
    props.className || null
  ]
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
}
