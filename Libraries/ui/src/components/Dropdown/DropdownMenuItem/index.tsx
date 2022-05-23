import React, { Children, FC, cloneElement } from 'react';
import clsx from 'clsx';
import { classNames } from './methods';
import { DropdownMenuItemProps } from './props';

const DropdownMenuItem: FC<DropdownMenuItemProps> = (props: DropdownMenuItemProps) => {
  const {
    className: itemClassName,
    setInactive,
    children
  }: DropdownMenuItemProps = props;

  const menuItems = Children
    .toArray(children)
    .map((child: any, index: number) => {
      const {
        className: childClassName,
        children,
        onClick,
        ...otherProps
      } = child.props;

      const className = clsx(itemClassName, childClassName);

      return cloneElement(child, {
        key: `dropdown-item-${index}`,
        className: classNames`${{
          className,
          ...otherProps
        }}`,
        onClick: () => {
          if (setInactive) {
            setInactive();
          }

          if (onClick) {
            onClick();
          }
        },
        ...otherProps
      }, children);
    });

  return (
    <>
      {
        menuItems
      }
    </>
  );
};

export default DropdownMenuItem;
