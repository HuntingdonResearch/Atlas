import React, { FC } from 'react';
import styled from 'styled-components';
import { classNames } from './methods';
import { TableFootProps } from './props';

const StyledTFoot: any = styled.tfoot.attrs((props: TableFootProps): any => ({
  className: classNames`${props}`
}))``;

const TableFoot: FC<TableFootProps> = (props: TableFootProps) => (
  <StyledTFoot {...props}/>
);

export default TableFoot;
