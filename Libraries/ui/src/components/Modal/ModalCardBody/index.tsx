import React, { FC } from 'react';
import styled from 'styled-components';
import { classNames } from './methods';
import { ModalCardBodyProps } from './props';

const StyledDiv: any = styled.div.attrs((props: ModalCardBodyProps) => ({
  className: classNames`${props}`
}))``;

const ModalCardBody: FC<ModalCardBodyProps> = (props: ModalCardBodyProps) => (
  <StyledDiv {...props}/>
);

export default ModalCardBody;
