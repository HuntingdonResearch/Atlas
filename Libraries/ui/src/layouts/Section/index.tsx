import React, { FC } from 'react';
import styled from 'styled-components';
import { classNames } from './methods';
import { SectionProps } from './props';

const StyledSection: any = styled.section.attrs((props: SectionProps) => ({
  className: classNames`${props}`
}))``;

const Section: FC<SectionProps> = (props: SectionProps) => (
  <StyledSection {...props}/>
);

export default Section;
