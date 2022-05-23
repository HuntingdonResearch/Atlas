import React, { FC } from 'react';
import styled from 'styled-components';
import { classNames } from './methods';
import { PaginationListEllipsisProps } from './props';

const StyledListItem: any = styled.li``;

const StyledSpan: any = styled.span.attrs((props: PaginationListEllipsisProps) => ({
  className: classNames`${props}`
}))``;

const PaginationListEllipsis: FC<PaginationListEllipsisProps> = (props: PaginationListEllipsisProps) => (
  <StyledListItem>
    <StyledSpan>&hellip;</StyledSpan>
  </StyledListItem>
);

export default PaginationListEllipsis;
