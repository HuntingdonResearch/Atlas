import { ClassNameFunc } from '../../types/ClassNameFunc';
import { AnchorProps } from './props';

export const classNames: ClassNameFunc<AnchorProps> = (strings: TemplateStringsArray, props: AnchorProps): string => {
  const classNames: string = [
    'link',
    props.className || null
  ]
    .concat(
      [
        props.textColor ? `has-text-${props.textColor}` : null,
        props.backColor ? `has-background-${props.backColor}` : null
      ]
    )
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
