import { ClassNameFunc } from '../../../types/ClassNameFunc';
import { ModalCloseProps } from './props';

export const classNames: ClassNameFunc<ModalCloseProps> = (strings: TemplateStringsArray, props: ModalCloseProps): string => {
  const classNames: string = [
    'modal-close',
    props.className || null
  ]
    .concat(
      [
        props.size ? `is-${props.size}` : null
      ]
    )
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
