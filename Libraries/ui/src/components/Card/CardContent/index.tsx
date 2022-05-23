import React, { FC } from 'react';
import styled from 'styled-components';
import { classNames } from './methods';
import { CardContentProps } from './props';

const StyledDiv: any = styled.div.attrs((props: CardContentProps) => ({
  className: classNames`${props}`
}))``;

const CardContent: FC<CardContentProps> = (props: CardContentProps) => (
  <StyledDiv {...props}/>
);

export default CardContent;
