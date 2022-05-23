import DropdownTrigger from './DropdownTrigger';
import DropdownMenu from './DropdownMenu';

export interface DropdownSubComponents {
  Trigger: typeof DropdownTrigger;

  Menu: typeof DropdownMenu;
}
