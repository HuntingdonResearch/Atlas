import { ClassNameFunc } from '../../types/ClassNameFunc';
import { ContainerProps } from './props';

export const classNames: ClassNameFunc<ContainerProps> = (strings: TemplateStringsArray, props: ContainerProps): string => {
  const classNames: string = [
    'container',
    props.className || null
  ]
    .concat(
      [
        props.fluid ? `is-fluid` : null,
        props.size ? `is-${props.size}` : null
      ]
    )
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
