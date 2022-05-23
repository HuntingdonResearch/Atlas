import MenuLabel from './MenuLabel';
import MenuList from './MenuList';

export interface MenuSubComponents {
  Label: typeof MenuLabel;

  List: typeof MenuList;
}
