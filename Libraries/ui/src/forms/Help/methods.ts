import { ClassNameFunc } from '../../types/ClassNameFunc';
import { HelpProps } from './props';

export const classNames: ClassNameFunc<HelpProps> = (strings: TemplateStringsArray, props: HelpProps): string => {
  const classNames: string = [
    'help',
    props.className || null
  ]
    .concat(
      [
        props.color ? `is-${props.color}` : null
      ]
    )
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
