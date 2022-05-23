import React, { FC } from 'react';
import styled from 'styled-components';
import { classNames } from './methods';
import { LevelRightProps } from './props';

const StyledDiv: any = styled.div.attrs((props: LevelRightProps) => ({
  className: classNames`${props}`
}))``;

const LevelRight: FC<LevelRightProps> = (props: LevelRightProps) => (
  <StyledDiv {...props}/>
);

export default LevelRight;
