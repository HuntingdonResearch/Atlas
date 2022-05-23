import NavBarBrand from './NavBarBrand';
import NavBarBurger from './NavBarBurger';
import NavBarDivider from './NavBarDivider';
import NavBarDropdown from './NavBarDropdown';
import NavBarEnd from './NavBarEnd';
import NavBarItem from './NavBarItem';
import NavBarLink from './NavBarLink';
import NavBarMenu from './NavBarMenu';
import NavBarStart from './NavBarStart';

export interface NavBarSubComponents {
  Brand: typeof NavBarBrand;

  Burger: typeof NavBarBurger;

  Dropdown: typeof NavBarDropdown;

  Item: typeof NavBarItem;

  Divider: typeof NavBarDivider;

  Link: typeof NavBarLink;

  Menu: typeof NavBarMenu;

  Start: typeof NavBarStart;

  End: typeof NavBarEnd;
}
