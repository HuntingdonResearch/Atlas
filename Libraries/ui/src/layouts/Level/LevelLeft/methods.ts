import { ClassNameFunc } from '../../../types/ClassNameFunc';
import { LevelLeftProps } from './props';

export const classNames: ClassNameFunc<LevelLeftProps> = (strings: TemplateStringsArray, props: LevelLeftProps): string => {
  const classNames: string = [
    'level-left',
    props.className || null
  ]
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
