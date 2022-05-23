import { ClassNameFunc } from '../../../types/ClassNameFunc';
import { LevelRightProps } from './props';

export const classNames: ClassNameFunc<LevelRightProps> = (strings: TemplateStringsArray, props: LevelRightProps): string => {
  const classNames: string = [
    'level-right',
    props.className || null
  ]
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
