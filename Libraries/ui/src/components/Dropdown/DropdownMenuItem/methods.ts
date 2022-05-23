import { ClassNameFunc } from '../../../types/ClassNameFunc';
import { DropdownMenuItemProps } from './props';

export const classNames: ClassNameFunc<DropdownMenuItemProps> = (strings: TemplateStringsArray, props: DropdownMenuItemProps): string => {
  const classNames: string = [
    'dropdown-item',
    props.className || null
  ]
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
