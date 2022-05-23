import React, { FC } from 'react';
import styled from 'styled-components';
import CardFooterItem from './CardFooterItem';
import { classNames } from './methods';
import { CardFooterProps } from './props';
import { CardFooterSubComponents } from './sub-components';

const StyledFooter: any = styled.footer.attrs((props: CardFooterProps) => ({
  className: classNames`${props}`
}))``;

const CardFooter: FC<CardFooterProps> & CardFooterSubComponents = (props: CardFooterProps) => (
  <StyledFooter {...props}/>
);

CardFooter.Item = CardFooterItem;

export default CardFooter;
