import { ClassNameFunc } from '../../../types/ClassNameFunc';
import { ModalCardHeadProps } from './props';

export const classNames: ClassNameFunc<ModalCardHeadProps> = (strings: TemplateStringsArray, props: ModalCardHeadProps): string => {
  const classNames: string = [
    'modal-card-head',
    props.className || null
  ]
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
