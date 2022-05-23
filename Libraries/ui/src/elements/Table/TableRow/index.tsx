import React, { FC } from 'react';
import styled from 'styled-components';
import { classNames } from './methods';
import { TableRowProps } from './props';

const StyledTR: any = styled.tr.attrs((props: TableRowProps): any => ({
  className: classNames`${props}`
}))``;

const TableRow: FC<TableRowProps> = (props: TableRowProps) => (
  <StyledTR {...props}/>
);

export default TableRow;
