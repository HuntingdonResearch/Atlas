import { ClassNameFunc } from '../../../types/ClassNameFunc';
import { ModalCardProps } from './props';

export const classNames: ClassNameFunc<ModalCardProps> = (strings: TemplateStringsArray, props: ModalCardProps): string => {
  const classNames: string = [
    'modal-card',
    props.className || null
  ]
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
