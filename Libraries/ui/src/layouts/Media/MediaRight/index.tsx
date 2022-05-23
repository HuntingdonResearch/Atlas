import React, { FC } from 'react';
import styled from 'styled-components';
import { classNames } from './methods';
import { MediaRightProps } from './props';

const StyledDiv: any = styled.div.attrs((props: MediaRightProps) => ({
  className: classNames`${props}`
}))``;

const MediaRight: FC<MediaRightProps> = (props: MediaRightProps) => (
  <StyledDiv {...props}/>
);

export default MediaRight;
