import { ClassNameFunc } from '../../../types/ClassNameFunc';
import { PanelTabsProps } from './props';

export const classNames: ClassNameFunc<PanelTabsProps> = (strings: TemplateStringsArray, props: PanelTabsProps): string => {
  const classNames: string = [
    'panel-tabs',
    props.className || null
  ]
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};

export const setSelectedGroup = (group: string): any => {
  return {
    type: 'SET_SELECTED_GROUP',
    group
  };
};
