import React, { FC } from 'react';
import styled from 'styled-components';
import { classNames } from './methods';
import { NavBarStartProps } from './props';

const StyledDiv: any = styled.div.attrs((props: NavBarStartProps) => ({
  className: classNames`${props}`
}))``;

const NavBarStart: FC<NavBarStartProps> = (props: NavBarStartProps) => (
  <StyledDiv {...props} />
);

export default NavBarStart;
