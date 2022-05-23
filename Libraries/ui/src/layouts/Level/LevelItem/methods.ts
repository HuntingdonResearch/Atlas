import { ClassNameFunc } from '../../../types/ClassNameFunc';
import { LevelItemProps } from './props';

export const classNames: ClassNameFunc<LevelItemProps> = (strings: TemplateStringsArray, props: LevelItemProps): string => {
  const classNames: string = [
    'level-item',
    props.className || null
  ]
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
