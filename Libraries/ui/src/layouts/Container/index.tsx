import React, { FC } from 'react';
import styled from 'styled-components';
import { classNames } from './methods';
import { ContainerProps } from './props';

const StyledDiv: any = styled.div.attrs((props: ContainerProps) => ({
  className: classNames`${props}`
}))``;

const Container: FC<ContainerProps> = (props: ContainerProps) => (
  <StyledDiv {...props}/>
);

export default Container;
