import React, { FC } from 'react';
import styled from 'styled-components';
import { classNames } from './methods';
import { ParagraphProps } from './props';

const StyledP: any = styled.p.attrs((props: ParagraphProps) => ({
  className: classNames`${props}`
}))``;

const Paragraph: FC<ParagraphProps> = (props: ParagraphProps) => (
  <StyledP {...props}/>
);

export default Paragraph;
