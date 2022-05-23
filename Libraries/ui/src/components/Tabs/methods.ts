import { ClassNameFunc } from '../../types/ClassNameFunc';
import { TabsProps } from './props';

export const classNames: ClassNameFunc<TabsProps> = (strings: TemplateStringsArray, props: TabsProps) => {
  const classNames: string = [
    'tabs',
    props.className || null
  ]
    .concat(
      [
        props.alignment ? `is-${props.alignment}` : null,
        props.size ? `is-${props.size}` : null,
        props.look
          ? props.look === 'toggle-rounded'
            ? `is-toggle is-toggle-rounded`
            : `is-${props.look}`
          : null,
        props.fullwidth ? `is-fullwidth` : null
      ]
    )
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};

export const setActiveIndex = (index: number): any => {
  return {
    type: 'SET_ACTIVE_INDEX',
    index
  };
};

export const reduce = (state: any, action: any): any => {
  switch(action.type) {
    case 'SET_ACTIVE_INDEX':
      return {
        ...state,
        activeIndex: action.index
      };

    default:
      return state;
  }
};
