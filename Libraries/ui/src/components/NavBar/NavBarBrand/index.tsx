import React, { FC } from 'react';
import styled from 'styled-components';
import { classNames } from './methods';
import { NavBarBrandProps } from './props';

const StyledDiv: any = styled.div.attrs((props: NavBarBrandProps) => ({
  className: classNames`${props}`
}))``;

const NavBarBrand: FC<NavBarBrandProps> = (props: NavBarBrandProps) => {
  return (
    <StyledDiv {...props }/>
  );
};

export default NavBarBrand;
