import React, { FC } from 'react';
import styled from 'styled-components';
import CardContent from './CardContent';
import CardFooter from './CardFooter';
import CardHeader from './CardHeader';
import CardImage from './CardImage';
import { classNames } from './methods';
import { CardProps } from './props';
import { CardSubComponents } from './sub-components';

const StyledDiv: any = styled.div.attrs((props: CardProps) => ({
  className: classNames`${props}`
}))``;

const Card: FC<CardProps> & CardSubComponents = (props: CardProps) => (
  <StyledDiv {...props}/>
);

Card.Header = CardHeader;

Card.Image = CardImage;

Card.Content = CardContent;

Card.Footer = CardFooter;

export default Card;
