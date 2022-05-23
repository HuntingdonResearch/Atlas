import React, { FC } from 'react';
import styled from 'styled-components';
import { classNames } from './methods';
import { IconTextProps } from './props';

const StyledSpan: any = styled.span.attrs((props: IconTextProps) => ({
  className: classNames`${props}`
}))``;

const IconText: FC<IconTextProps> = (props: IconTextProps) => (
  <StyledSpan {...props}/>
);

export default IconText;
