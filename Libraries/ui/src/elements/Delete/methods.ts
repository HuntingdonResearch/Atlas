import { ClassNameFunc } from '../../types/ClassNameFunc';
import { DeleteProps } from './props';

export const classNames: ClassNameFunc<DeleteProps> = (strings: TemplateStringsArray, props: DeleteProps): string => {
  const classNames: string = [
    'delete',
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
