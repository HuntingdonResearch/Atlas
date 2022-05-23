import { ClassNameFunc } from '../../../types/ClassNameFunc';
import { ModalCardFootProps } from './props';

export const classNames: ClassNameFunc<ModalCardFootProps> = (strings: TemplateStringsArray, props: ModalCardFootProps): string => {
  const classNames: string = [
    'modal-card-foot',
    props.className || null
  ]
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
