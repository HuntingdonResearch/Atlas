import { ClassNameFunc } from '../../../types/ClassNameFunc';
import { DropdownTriggerProps } from './props';

export const classNames: ClassNameFunc<DropdownTriggerProps> = (strings: TemplateStringsArray, props: DropdownTriggerProps): string => {
  const classNames: string = [
    'dropdown-trigger',
    props.className || null
  ]
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
