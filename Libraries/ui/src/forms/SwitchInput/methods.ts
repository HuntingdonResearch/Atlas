import { ClassNameFunc } from '../../types/ClassNameFunc';
import { SwitchInputProps } from './props';

export const classNames: ClassNameFunc<SwitchInputProps> = (strings: TemplateStringsArray, props: SwitchInputProps): string => {
  const classNames: string = [
    'switch',
    props.className || null
  ]
    .concat(
      [
        props.size ? `is-${props.size}` : null
      ]
    )
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
