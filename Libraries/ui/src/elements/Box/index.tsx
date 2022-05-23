import React, { FC } from 'react';
import styled from 'styled-components';
import { classNames } from './methods';
import { BoxProps } from './props';

const StyledDiv: any = styled.div.attrs((props: BoxProps): any => ({
  className: classNames`${props}`
}))``;

const Box: FC<BoxProps> = (props: BoxProps) => (
  <StyledDiv {...props}/>
);

export default Box;
