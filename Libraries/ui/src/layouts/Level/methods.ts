import { ClassNameFunc } from '../../types/ClassNameFunc';
import { LevelProps } from './props';

export const classNames: ClassNameFunc<LevelProps> = (strings: TemplateStringsArray, props: LevelProps): string => {
  const classNames: string = [
    'level',
    props.className || null
  ]
    .concat(
      [
        props.mobile ? `is-mobile` : null
      ]
    )
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
