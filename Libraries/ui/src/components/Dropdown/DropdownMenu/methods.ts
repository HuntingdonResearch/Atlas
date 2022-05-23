import { ClassNameFunc } from '../../../types/ClassNameFunc';
import { DropdownMenuProps } from './props';

export const classNames: ClassNameFunc<DropdownMenuProps> = (strings: TemplateStringsArray, props: DropdownMenuProps): string => {
  const classNames: string = [
    'dropdown-menu',
    props.className || null
  ]
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
