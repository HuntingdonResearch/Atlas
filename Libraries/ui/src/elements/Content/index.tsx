import React, { FC } from 'react';
import styled from 'styled-components';
import { classNames } from './methods';
import { ContentProps } from './props';

const StyledDiv: any = styled.div.attrs((props: ContentProps): any => ({
  className: classNames`${props}`
}))``;

const Content: FC<ContentProps> = (props: ContentProps) => (
  <StyledDiv {...props}/>
);

export default Content;
