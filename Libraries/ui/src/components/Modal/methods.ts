import { ClassNameFunc } from '../../types/ClassNameFunc';
import { ModalProps } from './props';

export const classNames: ClassNameFunc<ModalProps> = (strings: TemplateStringsArray, props: ModalProps): string => {
  const classNames: string = [
    'modal',
    props.className || null
  ]
    .concat(
      [
        props.active ? `is-active` : null,
        props.clipped ? `is-clipped` : null
      ]
    )
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
