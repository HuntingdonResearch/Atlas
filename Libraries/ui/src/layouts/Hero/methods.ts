import { ClassNameFunc } from '../../types/ClassNameFunc';
import { HeroProps } from './props';

export const classNames: ClassNameFunc<HeroProps> = (strings: TemplateStringsArray, props: HeroProps): string => {
  const classNames: string = [
    'hero',
    props.className || null
  ]
    .concat(
      [
        props.color ? `is-${props.color}` : null,
        props.size
          ? (props.size === 'fullheight' && props.withNavBar)
            ? `is-${props.size}-with-navbar`
            : `is-${props.size}`
          : null
      ]
    )
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
