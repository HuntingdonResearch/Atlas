import React, { FC } from 'react';
import styled from 'styled-components';
import TableBody from './TableBody';
import TableColumn from './TableColumn';
import TableFoot from './TableFoot';
import TableHead from './TableHead';
import TableHeading from './TableHeading';
import TableRow from './TableRow';
import { classNames } from './methods';
import { TableProps } from './props';
import { TableSubComponents } from './sub-components';

const StyledTableContainer: any = styled.div.attrs(() => ({
  className: 'table-container'
}))``;

const StyledTable: any = styled.table.attrs((props: TableProps) => ({
  className: classNames`${props}`
}))``;

const Table: FC<TableProps> & TableSubComponents = (props: TableProps) => {
  const {
    scrollable
  }: TableProps = props;

  return scrollable
    ? (
      <StyledTableContainer>
        <StyledTable {...props}/>
      </StyledTableContainer>
    )
    : (
      <StyledTable {...props}/>
    );
};

Table.Head = TableHead;

Table.Foot = TableFoot;

Table.Body = TableBody;

Table.Row = TableRow;

Table.Heading = TableHeading;

Table.Column = TableColumn;

export default Table;
