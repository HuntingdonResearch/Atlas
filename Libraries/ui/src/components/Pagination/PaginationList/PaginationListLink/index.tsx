import React, { Children, cloneElement, FC } from 'react';
import styled from 'styled-components';
import { classNames } from './methods';
import { PaginationListLinkProps } from './props';

const StyledListItem: any = styled.li``;

const PaginationListLink: FC<PaginationListLinkProps> = (props: PaginationListLinkProps) => {
  const {
    current,
    ariaLabel,
    onClick,
    children,
    ...otherProps
  }: PaginationListLinkProps = props;

  const child: any = Children.only(children);

  const item: any = cloneElement(child, {
    ...child.props,
    className: classNames`${props}`,
    'aria-current': current ? 'page' : undefined,
    'aria-label': ariaLabel,
    onClick
  });

  return (
    <StyledListItem {...otherProps}>
      {item}
    </StyledListItem>
  );
};

export default PaginationListLink;
