import React, { Children, cloneElement, FC } from 'react';
import { classNames } from './methods';
import { PaginationNextProps } from './props';

const PaginationNext: FC<PaginationNextProps> = (props: PaginationNextProps) => {
  const {
    children,
    ...otherProps
  }: PaginationNextProps = props;

  const child: any = Children.only(children);

  const item: any = cloneElement(child, {
    ...child.props,
    ...otherProps,
    className: classNames`${props}`
  })

  return item;
}

export default PaginationNext;
