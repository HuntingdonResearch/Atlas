import { ClassNameFunc } from '../../types/ClassNameFunc';
import { BlockProps } from './props';

export const classNames: ClassNameFunc<BlockProps> = (strings: TemplateStringsArray, props: BlockProps): string => {
  const classNames: string = [
    'block',
    props.className || null
  ]
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
