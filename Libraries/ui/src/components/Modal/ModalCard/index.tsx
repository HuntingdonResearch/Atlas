import React, { FC } from 'react';
import styled from 'styled-components';
import ModalCardBody from '../ModalCardBody';
import ModalCardFoot from '../ModalCardFoot';
import ModalCardHead from '../ModalCardHead';
import { classNames } from './methods';
import { ModalCardProps } from './props';

const StyledDiv: any = styled.div.attrs((props: ModalCardProps) => ({
  className: classNames`${props}`
}))``;

interface SubComponents {
  Head: typeof ModalCardHead;

  Body: typeof ModalCardBody;

  Foot: typeof ModalCardFoot;
}

const ModalCard: FC<ModalCardProps> & SubComponents = (props: ModalCardProps) => (
  <StyledDiv {...props}/>
);

ModalCard.Head = ModalCardHead;

ModalCard.Body = ModalCardBody;

ModalCard.Foot = ModalCardFoot;

export default ModalCard;
