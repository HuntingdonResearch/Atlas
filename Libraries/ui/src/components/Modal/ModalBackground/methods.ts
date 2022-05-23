import { ClassNameFunc } from '../../../types/ClassNameFunc';
import { ModalBackgroundProps } from './props';

export const classNames: ClassNameFunc<ModalBackgroundProps> = (strings: TemplateStringsArray, props: ModalBackgroundProps): string => {
  const classNames: string = [
    'modal-background',
    props.className || null
  ]
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
