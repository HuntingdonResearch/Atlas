import React, { Children, cloneElement, FC } from 'react';
import { classNames } from './methods';
import { PaginationPreviousProps } from './props';

const PaginationPrevious: FC<PaginationPreviousProps> = (props: PaginationPreviousProps) => {
  const {
    children,
    ...otherProps
  }: PaginationPreviousProps = props;

  const child: any = Children.only(children);

  const item: any = cloneElement(child, {
    ...child.props,
    ...otherProps,
    className: classNames`${props}`
  })

  return item;
}

export default PaginationPrevious;
