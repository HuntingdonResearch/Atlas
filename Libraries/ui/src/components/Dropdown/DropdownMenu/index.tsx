import React, { Children, cloneElement, FC, useMemo } from 'react';
import styled from 'styled-components';
import DropdownMenuDivider from '../DropdownMenuDivider';
import DropdownMenuItem from '../DropdownMenuItem';
import { classNames } from './methods';
import { DropdownMenuProps } from './props';
import { DropdownMenuSubComponents } from './sub-components';

const StyledMenuDiv: any = styled.div.attrs((props: DropdownMenuProps) => ({
  id: props.name,
  className: classNames`${props}`,
  role: 'menu'
}))``;

const StyledContentDiv: any = styled.div.attrs(() => ({
  className: 'dropdown-content'
}))``;

const DropdownMenu: FC<DropdownMenuProps> & DropdownMenuSubComponents = (props: DropdownMenuProps) => {
  const {
    setInactive,
    children,
    ...otherProps
  }: DropdownMenuProps = props;

  const menuItems = useMemo(() => Children
    .toArray(children)
    .map((child: any) => {
      if (child.type === DropdownMenuItem) {
        return cloneElement(child, {
          ...child.props,
          setInactive
        });
      }

      return child;
    }), [children, setInactive]);

  return (
    <StyledMenuDiv {...otherProps}>
      <StyledContentDiv>
        {
          menuItems
        }
      </StyledContentDiv>
    </StyledMenuDiv>
  );
};

DropdownMenu.Divider = DropdownMenuDivider;

DropdownMenu.Item = DropdownMenuItem;

export default DropdownMenu;
