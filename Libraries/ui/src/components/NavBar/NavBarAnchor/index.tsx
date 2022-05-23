import React, { FC } from 'react';
import styled from 'styled-components';
import { classNames } from './methods';
import { NavBarAnchorProps } from './props';

const StyledAnchor: any = styled.a.attrs((props: NavBarAnchorProps) => ({
  className: classNames`${props}`
}))``;

const NavBarAnchor: FC<NavBarAnchorProps> = (props: NavBarAnchorProps) => (
  <StyledAnchor {...props}/>
);

export default NavBarAnchor;
