import React, { FC, useCallback, useContext } from 'react';
import styled from 'styled-components';
import { IsActiveContext } from '../contexts';
import NavBarBurgerLine from './NavBarBurgerLine';
import { classNames } from './methods';
import { NavBarBurgerProps } from './props';

const StyledAnchor: any = styled.a.attrs((props: NavBarBurgerProps & { onClick: () => void }) => ({
  className: classNames`${props}`
}))``;

const NavBarBurger: FC<NavBarBurgerProps> = (props: NavBarBurgerProps) => {
  const {
    target
  }: NavBarBurgerProps = props;

  const [isActive, setIsActive] = useContext(IsActiveContext);

  const toggleIsActive = useCallback((e: any) => {
    e.preventDefault();

    setIsActive(!isActive);
  }, [isActive, setIsActive]);

  return (
    <StyledAnchor {...props} role="button" aria-label="menu" aria-expanded={false} data-target={target} onClick={toggleIsActive}>
      <NavBarBurgerLine/>
      <NavBarBurgerLine/>
      <NavBarBurgerLine/>
    </StyledAnchor>
  );
};

export default NavBarBurger;
