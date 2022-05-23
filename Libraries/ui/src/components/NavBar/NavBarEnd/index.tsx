import React, { FC } from 'react';
import styled from 'styled-components';
import { classNames } from './methods';
import { NavBarEndProps } from './props';

const StyledDiv: any = styled.div.attrs((props: NavBarEndProps) => ({
  className: classNames`${props}`
}))``;

const NavBarEnd: FC<NavBarEndProps> = (props: NavBarEndProps) => (
  <StyledDiv {...props} />
);

export default NavBarEnd;
