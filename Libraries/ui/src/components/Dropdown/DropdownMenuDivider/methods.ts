import { ClassNameFunc } from '../../../types/ClassNameFunc';
import { DropdownMenuDividerProps } from './props';

export const classNames: ClassNameFunc<DropdownMenuDividerProps> = (strings: TemplateStringsArray, props: DropdownMenuDividerProps): string => {
  const classNames: string = [
    'dropdown-divider',
    props.className || null
  ]
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
