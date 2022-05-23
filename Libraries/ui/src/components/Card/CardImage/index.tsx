import React, { FC } from 'react';
import styled from 'styled-components';
import { classNames } from './methods';
import { CardImageProps } from './props';

const StyledDiv: any = styled.div.attrs((props: CardImageProps) => ({
  className: classNames`${props}`
}))``;

const CardImage: FC<CardImageProps> = (props: CardImageProps) => (
  <StyledDiv {...props}/>
);

export default CardImage;
