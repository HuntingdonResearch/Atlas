import React, { FC } from 'react';
import styled from 'styled-components';
import { classNames } from './methods';
import { AnchorProps } from './props';

const StyledA: any = styled.a.attrs((props: AnchorProps): any => ({
  className: classNames`${props}`
}))``;

const Anchor: FC<AnchorProps> = (props: AnchorProps) => (
  <StyledA {...props}/>
);

export default Anchor;
