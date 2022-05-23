import React, { FC } from 'react';
import styled from 'styled-components';
import { classNames } from './methods';
import { TextProps } from './props';

const StyledSpan: any = styled.span.attrs((props: TextProps): any => ({
  className: classNames`${props}`
}))``;

const Text: FC<TextProps> = (props: TextProps) => (
  <StyledSpan {...props}/>
);

export default Text;
