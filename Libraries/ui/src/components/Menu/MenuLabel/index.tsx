import React, { FC } from 'react';
import styled from 'styled-components';
import { classNames } from './methods';
import { MenuLabelProps } from './props';

const StyledP: any = styled.p.attrs((props: MenuLabelProps) => ({
  className: classNames`${props}`
}))``;

const MenuLabel: FC<MenuLabelProps> = (props: MenuLabelProps) => {
  return (
    <StyledP {...props}/>
  );
}

export default MenuLabel;
