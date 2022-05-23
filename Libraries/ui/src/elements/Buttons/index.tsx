import React, { FC } from 'react';
import styled from 'styled-components';
import { classNames } from './methods';
import { ButtonsProps } from './props';

const StyledDiv: any = styled.div.attrs((props: ButtonsProps) => ({
  className: classNames`${props}`
}))``;

const Buttons: FC<ButtonsProps> = (props: ButtonsProps) => (
  <StyledDiv {...props}/>
);

export default Buttons;
