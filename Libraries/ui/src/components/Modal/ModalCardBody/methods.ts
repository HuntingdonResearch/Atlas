import { ClassNameFunc } from '../../../types/ClassNameFunc';
import { ModalCardBodyProps } from './props';

export const classNames: ClassNameFunc<ModalCardBodyProps> = (strings: TemplateStringsArray, props: ModalCardBodyProps): string => {
  const classNames: string = [
    'modal-card-body',
    props.className || null
  ]
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
