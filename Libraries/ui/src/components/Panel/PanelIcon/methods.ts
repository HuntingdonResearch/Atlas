import { ClassNameFunc } from '../../../types/ClassNameFunc';
import { PanelIconProps } from './props';

export const classNames: ClassNameFunc<PanelIconProps> = (strings: TemplateStringsArray, props: PanelIconProps): string => {
  const classNames: string = [
    'panel-icon',
    props.className || null
  ]
    .concat(
      [
        props.color ? `has-text-${props.color}` : null,
        props.size ? `is-${props.size}` : null,
        props.position ? `is-${props.position}` : null
      ]
    )
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
