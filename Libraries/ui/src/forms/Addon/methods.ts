import { ClassNameFunc } from '../../types/ClassNameFunc';
import { AddonProps } from './props';

export const classNames: ClassNameFunc<AddonProps> = (strings: TemplateStringsArray, props: AddonProps): string => {
  const classNames: string = [
    'control',
    props.className || null
  ]
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
