import React, { FC } from 'react';
import styled from 'styled-components';
import { NavBarBurgerLineProps } from './props';

const StyledSpan: any = styled.span.attrs((props: NavBarBurgerLineProps) => ({
  'aria-hidden': true
}))``;

const NavBarBurgerLine: FC<NavBarBurgerLineProps> = (props: NavBarBurgerLineProps) => {
  return (
    <StyledSpan {...props}/>
  );
};

export default NavBarBurgerLine;
