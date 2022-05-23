import React, { FC } from 'react';
import styled from 'styled-components';
import MenuList from './MenuList';
import { classNames } from './methods';
import { MenuItemProps } from './props';
import { MenuItemSubComponents } from './sub-components';

const StyledListItem: any = styled.li.attrs((props: MenuItemProps) => ({
  className: classNames`${props}`
}))``;

const MenuItem: FC<MenuItemProps> & MenuItemSubComponents = (props: MenuItemProps) => {
  return (
    <StyledListItem{...props}/>
  );
}

MenuItem.List = MenuList;

export default MenuItem;
