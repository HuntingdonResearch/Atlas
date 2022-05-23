import React, { FC, useCallback } from 'react';
import styled from 'styled-components';
import { classNames } from './methods';
import { NavBarLinkProps } from './props';

const StyledLink: any = styled.a.attrs((props: NavBarLinkProps) => ({
  className: classNames`${props}`,
  href: props.href || '#'
}))``;

const NavBarLink: FC<NavBarLinkProps> = (props: NavBarLinkProps) => {
  const handleClick = useCallback((e: any) => {
    e.preventDefault();
  }, []);

  return (
    <StyledLink {...props} onClick={handleClick}/>
  );
};

export default NavBarLink;
