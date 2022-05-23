import { ClassNameFunc } from '../../../types/ClassNameFunc';
import { TabsTabProps } from './props';

export const listItemClassNames: ClassNameFunc<TabsTabProps & { active?: boolean }> = (strings: TemplateStringsArray, props: TabsTabProps & { active?: boolean }): string => {
  const classNames: string = [
    'tab',
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

export const anchorClassNames: ClassNameFunc<TabsTabProps & { active?: boolean }> = (strings: TemplateStringsArray, props: TabsTabProps & { active?: boolean }): string => {
  const classNames: string = [
    props.className || null
  ]
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
