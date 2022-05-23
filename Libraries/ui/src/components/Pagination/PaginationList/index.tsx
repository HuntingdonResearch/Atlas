import React, { FC } from 'react';
import styled from 'styled-components';
import PaginationListEllipsis from './PaginationListEllipsis';
import PaginationListLink from './PaginationListLink';
import { classNames } from './methods';
import { PaginationListProps } from './props';
import { PaginationListSubComponents } from './sub-components';

const StyledDiv: any = styled.div.attrs((props: PaginationListProps) => ({
  className: classNames`${props}`
}))``;

const PaginationList: FC<PaginationListProps> & PaginationListSubComponents = (props: PaginationListProps) => (
  <StyledDiv {...props}/>
);

PaginationList.Link = PaginationListLink;

PaginationList.Ellipsis = PaginationListEllipsis;

export default PaginationList;
