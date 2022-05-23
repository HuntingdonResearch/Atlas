import { ClassNameFunc } from '../../../types/ClassNameFunc';
import { MessageBodyProps } from './props';

export const classNames: ClassNameFunc<MessageBodyProps> = (strings: TemplateStringsArray, props: MessageBodyProps): string => {
  const classNames: string = [
    'message-body',
    props.className || null
  ]
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};
