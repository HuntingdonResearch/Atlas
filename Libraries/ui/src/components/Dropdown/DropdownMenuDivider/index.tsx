import React, { FC } from 'react';
import styled from 'styled-components';
import { classNames } from './methods';
import { DropdownMenuDividerProps } from './props';

const StyledHR: any = styled.hr.attrs((props: DropdownMenuDividerProps) => ({
  className: classNames`${props}`
}))``;

const DropdownMenuDivider: FC<DropdownMenuDividerProps> = (props: DropdownMenuDividerProps) => (
  <StyledHR {...props}/>
);

export default DropdownMenuDivider;
