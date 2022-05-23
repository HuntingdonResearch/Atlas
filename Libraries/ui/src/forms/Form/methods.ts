import { ClassNameFunc } from '../../types/ClassNameFunc';
import { FormProps } from './props';

export const classNames: ClassNameFunc<FormProps> = (strings: TemplateStringsArray, props: FormProps): string => {
  const classNames: string = [
    props.className || null
  ]
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
