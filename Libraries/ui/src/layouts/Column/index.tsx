import React, { FC } from 'react';
import styled from 'styled-components';
import { classNames } from './methods';
import { ColumnProps } from './props';

const StyledDiv: any = styled.div.attrs((props: ColumnProps) => ({
  className: classNames`${props}`
}))``;

const Column: FC<ColumnProps> = (props: ColumnProps) => (
  <StyledDiv {...props}/>
);

export default Column;
