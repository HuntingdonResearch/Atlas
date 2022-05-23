import React, {
  Children,
  FC,
  cloneElement,
  ReactNode,
  useCallback,
  useState,
  useRef,
  forwardRef,
  ForwardedRef, RefObject
} from 'react';
import styled from 'styled-components';
import useClickAwayEvent from '../../hooks/useClickAwayEvent';
import useKeyEvent from '../../hooks/useKeyEvent';
import DropdownMenu from './DropdownMenu';
import DropdownTrigger from './DropdownTrigger';
import { classNames } from './methods';
import { DropdownProps } from './props';
import { DropdownSubComponents } from './sub-components';

const StyledDiv: any = styled.div.attrs((props: DropdownProps) => ({
  className: classNames`${props}`
}))``;

const ClickableDropdown = (props: DropdownProps) => {
  const {
    name,
    alignment,
    direction,
    children,
    ...otherProps
  }: DropdownProps = props;

  const [isActive, setActive] = useState(false);
  const toggleActive = useCallback(() => setActive((isActive: boolean) => !isActive), [setActive]);
  const setInactive = useCallback(() => setActive(false), [setActive]);

  const trigger = Children
    .toArray(children)
    .filter((child: any) => child.type === DropdownTrigger)
    .map((child: any) => cloneElement(child, {
      ...child.props,
      name,
      toggleActive
    }))
    .shift();

  const menu = Children
    .toArray(children)
    .filter((child: any) => child.type === DropdownMenu)
    .map((child: any) => cloneElement(child, {
      ...child.props,
      name,
      setInactive
    }))
    .shift();

  const ref: RefObject<any> = useRef(null);

  useClickAwayEvent(ref, setInactive);

  useKeyEvent('Escape', setInactive);

  return (
    <StyledDiv ref={ref} {...{
      alignment,
      direction,
      active: isActive,
      ...otherProps
    }}>
      {trigger}
      {menu}
    </StyledDiv>
  );
};

const HoverableDropdown = (props: DropdownProps) => {
  const {
    name,
    alignment,
    direction,
    children,
    ...otherProps
  }: DropdownProps = props;

  const trigger = Children
    .toArray(children)
    .filter((child: any) => child.type === DropdownTrigger)
    .map((child: any) => cloneElement(child, {
      ...child.props,
      name
    }))
    .shift();

  const menu = Children
    .toArray(children)
    .filter((child: any) => child.type === DropdownMenu)
    .map((child: any) => cloneElement(child, {
      ...child.props,
      name
    }))
    .shift();

  return (
    <StyledDiv {...{
      alignment,
      direction,
      hoverable: true,
      ...otherProps
    }}>
      {trigger}
      {menu}
    </StyledDiv>
  );
};

const Dropdown: FC<DropdownProps> & DropdownSubComponents = (props: DropdownProps) => {
  const {
    hoverable,
    children
  }: {
    hoverable?: boolean,
    children: ReactNode
  } = props;

  return (
    hoverable
      ? (
        <HoverableDropdown {...props}>
          {children}
        </HoverableDropdown>
      )
      : (
        <ClickableDropdown {...props}>
          {children}
        </ClickableDropdown>
      )
  );
};

Dropdown.Trigger = DropdownTrigger;

Dropdown.Menu = DropdownMenu;

export default Dropdown;
