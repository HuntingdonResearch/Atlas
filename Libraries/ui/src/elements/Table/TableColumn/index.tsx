import React, { FC } from 'react';
import styled from 'styled-components';
import { classNames } from './methods';
import { TableColumnProps } from './props';

const StyledTD: any = styled.td.attrs((props: TableColumnProps): any => ({
  className: classNames`${props}`
}))``;

const TableColumn: FC<TableColumnProps> = (props: TableColumnProps) => (
  <StyledTD {...props}/>
);

export default TableColumn;
