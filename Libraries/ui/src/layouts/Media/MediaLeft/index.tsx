import React, { FC } from 'react';
import styled from 'styled-components';
import { classNames } from './methods';
import { MediaLeftProps } from './props';

const StyledFigure: any = styled.figure.attrs((props: MediaLeftProps) => ({
  className: classNames`${props}`
}))``;

const MediaLeft: FC<MediaLeftProps> = (props: MediaLeftProps) => (
  <StyledFigure {...props}/>
);

export default MediaLeft;
