import { ClassNameFunc } from '../../../types/ClassNameFunc';
import { PanelHeadingProps } from './props';

export const classNames: ClassNameFunc<PanelHeadingProps> = (strings: TemplateStringsArray, props: PanelHeadingProps): string => {
  const classNames: string = [
    'panel-heading',
    props.className || null
  ]
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
