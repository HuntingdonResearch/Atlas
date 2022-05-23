import React, { FC } from 'react';
import styled from 'styled-components';
import { classNames } from './methods';
import { ColumnsProps } from './props';

const StyledDiv: any = styled.div.attrs((props: ColumnsProps) => ({
  className: classNames`${props}`
}))``;

const Columns: FC<ColumnsProps> = (props: ColumnsProps) => (
  <StyledDiv {...props}/>
);

export default Columns;
