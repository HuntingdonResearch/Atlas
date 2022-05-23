import { ClassNameFunc } from '../../../types/ClassNameFunc';
import { PanelTabContentProps } from './props';

export const classNames: ClassNameFunc<PanelTabContentProps & { active?: boolean }> = (strings: TemplateStringsArray, props: PanelTabContentProps & { active?: boolean }): string => {
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

export const setActiveName = (name: string): any => {
  return {
    type: 'SET_ACTIVE_NAME',
    name
  };
}
