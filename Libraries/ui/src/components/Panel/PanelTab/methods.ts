import { ClassNameFunc } from '../../../types/ClassNameFunc';
import { PanelTabProps } from './props';

export const classNames: ClassNameFunc<PanelTabProps & { active?: boolean }> = (strings: TemplateStringsArray, props: PanelTabProps & { active?: boolean }): string => {
  const classNames: string = [
    'panel-tab',
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
