import React, { FC } from 'react';
import styled from 'styled-components';
import { classNames } from './methods';
import { NavBarDividerProps } from './props';

const StyledHR: any = styled.hr.attrs((props: NavBarDividerProps) => ({
  className: classNames`${props}`
}))``;

const NavBarDivider: FC<NavBarDividerProps> = (props: NavBarDividerProps) => {
  return (
    <StyledHR {...props}/>
  );
};

export default NavBarDivider;
