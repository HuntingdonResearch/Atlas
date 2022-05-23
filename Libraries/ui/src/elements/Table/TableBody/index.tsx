import React, { FC } from 'react';
import styled from 'styled-components';
import { classNames } from './methods';
import { TableBodyProps } from './props';

const StyledTBody: any = styled.tbody.attrs((props: TableBodyProps): any => ({
  className: classNames`${props}`
}))``;

const TableBody: FC<TableBodyProps> = (props: TableBodyProps) => (
  <StyledTBody {...props}/>
);

export default TableBody;
