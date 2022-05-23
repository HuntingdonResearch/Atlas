import React, { FC } from 'react';
import styled from 'styled-components';
import { classNames } from './methods';
import { TableHeadProps } from './props';

const StyledTHead: any = styled.thead.attrs((props: TableHeadProps): any => ({
  className: classNames`${props}`
}))``;

const TableHead: FC<TableHeadProps> = (props: TableHeadProps) => (
  <StyledTHead {...props}/>
);

export default TableHead;
