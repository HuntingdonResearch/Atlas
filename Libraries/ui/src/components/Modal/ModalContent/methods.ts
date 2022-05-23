import { ClassNameFunc } from '../../../types/ClassNameFunc';
import { ModalContentProps } from './props';

export const classNames: ClassNameFunc<ModalContentProps> = (strings: TemplateStringsArray, props: ModalContentProps): string => {
  const classNames: string = [
    'modal-content',
    props.className || null
  ]
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
