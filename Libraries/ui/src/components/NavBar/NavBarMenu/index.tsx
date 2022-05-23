import React, { FC, useContext } from 'react';
import styled from 'styled-components';
import { IsActiveContext } from '../contexts';
import { classNames } from './methods';
import { NavBarMenuProps } from './props';

const StyledDiv: any = styled.div.attrs((props: NavBarMenuProps & { isActive: boolean }) => ({
  className: classNames`${props}`
}))``;

const NavBarMenu: FC<NavBarMenuProps> = (props: NavBarMenuProps) => {
  const { name }: NavBarMenuProps = props;

  const [isActive] = useContext(IsActiveContext);

  const {
    children,
    ...rest
  } = props;

  return (
    <StyledDiv id={name} isActive={isActive} {...rest}>
      {
        children
      }
    </StyledDiv>
  );
};

export default NavBarMenu;
