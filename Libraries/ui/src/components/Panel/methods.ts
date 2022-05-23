import { ClassNameFunc } from '../../types/ClassNameFunc';
import { PanelProps } from './props';

export const classNames: ClassNameFunc<PanelProps> = (strings: TemplateStringsArray, props: PanelProps) => {
  const classNames: string = [
    'panel',
    props.className || null
  ]
    .concat(
      [
        props.color ? `is-${props.color}` : null
      ]
    )
    .filter((name: string | null): boolean => !!name)
    .join(' ');

  return classNames;
};

export const reduce = (state: any, action: any): any => {
  switch(action.type) {
    case 'SET_SELECTED_GROUP':
      return {
        ...state,
        selectedGroup: action.group
      };

    case 'SET_ACTIVE_NAME':
      return {
        ...state,
        activeName: state.activeName === action.name
          ? null
          : action.name
      };

    default:
      return state;
  }
};
