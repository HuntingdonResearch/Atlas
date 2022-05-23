import React, { FC } from 'react';
import styled from 'styled-components';
import { classNames } from './methods';
import { NavBarDropdownProps } from './props';

const StyledDiv: any = styled.div.attrs((props: NavBarDropdownProps) => ({
  className: classNames`${props}`
}))``;

const NavBarDropdown: FC<NavBarDropdownProps> = (props: NavBarDropdownProps) => (
  <StyledDiv {...props}/>
);

export default NavBarDropdown;
