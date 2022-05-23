import { ClassNameFunc } from '../../../types/ClassNameFunc';
import { MessageHeaderProps } from './props';

export const classNames: ClassNameFunc<MessageHeaderProps> = (strings: TemplateStringsArray, props: MessageHeaderProps): string => {
  const classNames: string = [
    'message-header',
    props.className || null
  ]
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
