import React, { FC } from 'react';
import styled from 'styled-components';
import MenuLabel from './MenuLabel';
import MenuList from './MenuList';
import { classNames } from './methods';
import { MenuProps } from './props';
import { MenuSubComponents } from './sub-components';

const StyledAside: any = styled.aside.attrs((props: MenuProps) => ({
  className: classNames`${props}`
}))``;

const Menu: FC<MenuProps> & MenuSubComponents = (props: MenuProps) => {
  return (
    <StyledAside {...props}/>
  );
}

Menu.Label = MenuLabel;

Menu.List = MenuList;

export default Menu;
