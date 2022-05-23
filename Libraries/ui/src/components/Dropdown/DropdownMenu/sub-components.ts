import DropdownMenuDivider from '../DropdownMenuDivider';
import DropdownMenuItem from '../DropdownMenuItem';

export interface DropdownMenuSubComponents {
  Divider: typeof DropdownMenuDivider;

  Item: typeof DropdownMenuItem;
}
