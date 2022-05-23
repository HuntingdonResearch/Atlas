import React, { Children, cloneElement, FC, useCallback, useContext, useMemo } from 'react';
import styled from 'styled-components';
import { IsActiveContext } from '../contexts';
import NavBarLink from '../NavBarLink';
import NavBarDropdown from '../NavBarDropdown';
import { classNames } from './methods';
import { NavBarItemProps } from './props';

const StyledDiv: any = styled.div.attrs((props: NavBarItemProps & { hasDropdown: boolean }) => ({
  className: classNames`${props}`
}))``;

const StyledLink: any = styled.a.attrs((props: NavBarItemProps & { hasDropdown: boolean }) => ({
  className: classNames`${props}`
}))``;

const NavBarItem: FC<NavBarItemProps> = (props: NavBarItemProps) => {
  const {
    hoverable: isHoverable,
    children,
    href,
    onClick: handleClick = () => {}
  } = props;

  const [isActive, setIsActive] = useContext(IsActiveContext);

  const link = useMemo(() => Children
    .toArray(children)
    .filter((child: any) => child.type === NavBarLink)
    .shift(), [children]
  );

  const dropdown = useMemo(() => Children
    .toArray(children)
    .filter((child: any) => child.type === NavBarDropdown)
    .shift(), [children]
  );

  const hasDropdown = !!dropdown;
  const hasLink = !!href;

  const handleClickAndDeactivate = useCallback((e: MouseEvent) => {
    setIsActive(false);

    handleClick();
  }, [setIsActive, handleClick]);

  if (hasDropdown) {
    return isHoverable
      ? (
        <StyledDiv hasDropdown={hasDropdown} hoverable={isHoverable} isActive={isActive} onClick={handleClick}>
          {link}
          {dropdown}
        </StyledDiv>
      )
      : (
        <StyledDiv hasDropdown={hasDropdown} isActive={isActive} onClick={handleClickAndDeactivate}>
          {link}
          {dropdown}
        </StyledDiv>
      );
  } else {
    return hasLink
      ? (
        <StyledLink {...props} onClick={handleClickAndDeactivate}>
          {
            children
          }
        </StyledLink>
      )
      : (
        <>
          {
            Children.map(children, (child: any, index: number) => cloneElement(child, {
              key: `navbar-item-${index}`,
              ...child.props,
              className: classNames`${{ ...props, hasDropdown: false }}`,
              onClick: handleClickAndDeactivate
            }))
          }
        </>
      );
  }
};

export default NavBarItem;
