import React, { FC } from 'react';
import styled from 'styled-components';
import { classNames } from './methods';
import { MediaContentProps } from './props';

const StyledDiv: any = styled.div.attrs((props: MediaContentProps) => ({
  className: classNames`${props}`
}))``;

const MediaContent: FC<MediaContentProps> = (props: MediaContentProps) => (
  <StyledDiv {...props}/>
);

export default MediaContent;
