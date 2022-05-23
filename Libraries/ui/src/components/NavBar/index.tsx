import React, { FC, useState, useEffect, useCallback, createRef } from 'react';
import styled from 'styled-components';
import { classNames } from './methods';
import NavBarBrand from './NavBarBrand';
import NavBarBurger from './NavBarBurger';
import NavBarDivider from './NavBarDivider';
import NavBarDropdown from './NavBarDropdown';
import NavBarEnd from './NavBarEnd';
import NavBarItem from './NavBarItem';
import NavBarLink from './NavBarLink';
import NavBarMenu from './NavBarMenu';
import NavBarStart from './NavBarStart';
import { IsActiveContext } from './contexts';
import { NavBarProps } from './props';
import { NavBarSubComponents } from './sub-components';
import useClickAwayEvent from '../../hooks/useClickAwayEvent';

const StyledNav: any = styled.nav.attrs((props: NavBarProps) => ({
  className: classNames`${props}`
}))``;

const NavBar: FC<NavBarProps> & NavBarSubComponents = (props: NavBarProps) => {
  const [isActive, setIsActive] = useState(false);

  const ensureFixedBodyClass = useCallback(() => {
    const {
      fixed
    } = props;

    const className = `has-fixed-${fixed}`;
    const body = window?.document?.body;

    if ((fixed === 'top' || fixed === 'bottom') && body.classList.contains(className)) {
      body.classList.add(className);
    }
  }, [props]);

  useEffect(() => {
    ensureFixedBodyClass();

    return () => {
    };
  }, [ensureFixedBodyClass]);

  const ref = createRef();

  const handleClickAway = useCallback(() => setIsActive(false), [setIsActive]);

  useClickAwayEvent(ref, handleClickAway);

  return (
    <IsActiveContext.Provider value={[isActive, setIsActive]}>
      <StyledNav ref={ref} {...props} role="navigation" aria-label="main navigation"/>
    </IsActiveContext.Provider>
  );
};

NavBar.Brand = NavBarBrand;

NavBar.Burger = NavBarBurger;

NavBar.Dropdown = NavBarDropdown;

NavBar.Item = NavBarItem;

NavBar.Divider = NavBarDivider;

NavBar.Link = NavBarLink;

NavBar.Menu = NavBarMenu;

NavBar.Start = NavBarStart;

NavBar.End = NavBarEnd;

export default NavBar;
