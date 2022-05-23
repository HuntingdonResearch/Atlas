import React, { FC } from 'react';
import styled from 'styled-components';
import { itemsClassNames, listClassNames } from './methods';
import { MenuItemProps, MenuListProps } from './props';
import { MenuItemSubComponents, MenuListSubComponents } from './sub-components';

const StyledListItem: any = styled.li.attrs((props: MenuItemProps) => ({
  className: itemsClassNames`${props}`
}))``;

const StyledList: any = styled.ul.attrs((props: MenuListProps) => ({
  className: listClassNames`${props}`
}))``;

export const MenuItem: FC<MenuItemProps> & MenuItemSubComponents = (props: MenuItemProps) => {
  return (
    <StyledListItem{...props}/>
  );
}

export const MenuList: FC<MenuListProps> & MenuListSubComponents = (props: MenuListProps) => {
  return (
    <StyledList {...props}/>
  );
}

MenuList.Item = MenuItem;

export default MenuList;
