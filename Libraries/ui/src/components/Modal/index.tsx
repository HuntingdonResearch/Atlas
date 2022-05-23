import React, { FC } from 'react';
import styled from 'styled-components';
import ModalBackground from './ModalBackground';
import ModalCard from './ModalCard';
import ModalClose from './ModalClose';
import ModalContent from './ModalContent';
import { classNames } from './methods';
import { ModalProps } from './props';
import { ModalSubComponents } from './sub-components';

const StyledDiv: any = styled.div.attrs((props: ModalProps) => ({
  className: classNames`${props}`
}))``;

const Modal: FC<ModalProps> & ModalSubComponents = (props: ModalProps) => (
  <StyledDiv {...props}/>
);

Modal.Background = ModalBackground;

Modal.Content = ModalContent;

Modal.Close = ModalClose;

Modal.Card = ModalCard;

export default Modal;
