import React, { FC } from 'react';
import styled from 'styled-components';
import { classNames } from './methods';
import { TableHeadingProps } from './props';

const StyledTH: any = styled.th.attrs((props: TableHeadingProps): any => ({
  className: classNames`${props}`
}))``;

const TableHeading: FC<TableHeadingProps> = (props: TableHeadingProps) => (
  <StyledTH {...props}/>
);

export default TableHeading;
