import React, { FC } from 'react';
import styled from 'styled-components';
import { classNames } from './methods';
import { ModalContentProps } from './props';

const StyledDiv: any = styled.div.attrs((props: ModalContentProps) => ({
  className: classNames`${props}`
}))``;

const ModalContent: FC<ModalContentProps> = (props: ModalContentProps) => (
  <StyledDiv {...props}/>
);

export default ModalContent;
