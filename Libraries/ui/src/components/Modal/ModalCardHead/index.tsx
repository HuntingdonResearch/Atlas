import React, { FC } from 'react';
import styled from 'styled-components';
import { classNames } from './methods';
import { ModalCardHeadProps } from './props';

const StyledDiv: any = styled.div.attrs((props: ModalCardHeadProps) => ({
  className: classNames`${props}`
}))``;

const ModalCardHead: FC<ModalCardHeadProps> = (props: ModalCardHeadProps) => (
  <StyledDiv {...props}/>
);

export default ModalCardHead;
