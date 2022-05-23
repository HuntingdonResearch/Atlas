import React, { FC } from 'react';
import styled from 'styled-components';
import PaginationList from './PaginationList';
import PaginationNext from './PaginationNext';
import PaginationPrevious from './PaginationPrevious';
import { classNames } from './methods';
import { PaginationProps } from './props';
import { PaginationSubComponents } from './sub-components';

const StyledNav: any = styled.nav.attrs((props: PaginationProps) => ({
  className: classNames`${props}`,
}))``;

const Pagination: FC<PaginationProps> & PaginationSubComponents = (props: PaginationProps) => {
  const {
    children,
    ...otherProps
  }: PaginationProps = props;

  return (
    <StyledNav {...otherProps} role="navigation" aria-label="pagination">
      {children}
    </StyledNav>
  );
};

Pagination.List = PaginationList;

Pagination.Previous = PaginationPrevious;

Pagination.Next = PaginationNext;

export default Pagination;
