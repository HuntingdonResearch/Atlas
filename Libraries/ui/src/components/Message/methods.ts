import { ClassNameFunc } from '../../types/ClassNameFunc';
import { MessageProps } from './props';

export const classNames: ClassNameFunc<MessageProps> = (strings: TemplateStringsArray, props: MessageProps): string => {
  const classNames: string = [
    'message',
    props.className || null
  ]
    .concat(
      [
        props.color ? `is-${props.color}` : null,
        props.size ? `is-${props.size}` : null
      ]
    )
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
