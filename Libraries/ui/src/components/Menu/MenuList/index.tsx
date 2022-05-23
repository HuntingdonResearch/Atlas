import React, { FC } from 'react';
import styled from 'styled-components';
import MenuItem from './MenuItem';
import { classNames } from './methods';
import { MenuListProps } from './props';
import { MenuListSubComponents } from './sub-components';

const StyledList: any = styled.ul.attrs((props: MenuListProps) => ({
  className: classNames`${props}`
}))``;

const MenuList: FC<MenuListProps> & MenuListSubComponents = (props: MenuListProps) => {
  return (
    <StyledList {...props}/>
  );
}

MenuList.Item = MenuItem;

export default MenuList;
