import { ClassNameFunc } from '../../../types/ClassNameFunc';
import { PanelBlockProps } from './props';

export const classNames: ClassNameFunc<PanelBlockProps & { active?: boolean }> = (strings: TemplateStringsArray, props: PanelBlockProps & { active?: boolean }): string => {
  const classNames: string = [
    'panel-block',
    props.className || null
  ]
    .concat(
      [
        props.active ? 'is-active' : null
      ]
    )
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
