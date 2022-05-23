import React, { FC } from 'react';
import styled from 'styled-components';
import { classNames } from './methods';
import { ModalCardFootProps } from './props';

const StyledDiv: any = styled.div.attrs((props: ModalCardFootProps) => ({
  className: classNames`${props}`
}))``;

const ModalCardFoot: FC<ModalCardFootProps> = (props: ModalCardFootProps) => (
  <StyledDiv {...props}/>
);

export default ModalCardFoot;
