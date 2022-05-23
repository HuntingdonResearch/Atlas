import React, { Children, cloneElement, FC, useMemo } from 'react';
import { classNames } from './methods';
import { CardFooterItemProps } from './props';

const CardFooterItem: FC<CardFooterItemProps> = (props: CardFooterItemProps) => {
  const {
    children
  }: CardFooterItemProps = props;

  const child: any = useMemo(() => Children.only(children), [children]);

  return cloneElement(child, {
    ...child.props,
    className: classNames`${props}`
  });
};

export default CardFooterItem;
