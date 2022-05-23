import { ClassNameFunc } from '../../types/ClassNameFunc';
import { NotificationProps } from './props';

export const classNames: ClassNameFunc<NotificationProps> = (strings: TemplateStringsArray, props: NotificationProps): string => {
  const classNames: string = [
    'notification',
    props.className || null
  ]
    .concat(
      [
        props.color ? `is-${props.color}` : null,
        props.light ? `is-light` : null
      ]
    )
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
