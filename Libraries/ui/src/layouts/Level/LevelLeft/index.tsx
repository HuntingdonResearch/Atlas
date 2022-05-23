import React, { FC } from 'react';
import styled from 'styled-components';
import { classNames } from './methods';
import { LevelLeftProps } from './props';

const StyledDiv: any = styled.div.attrs((props: LevelLeftProps) => ({
  className: classNames`${props}`
}))``;

const LevelLeft: FC<LevelLeftProps> = (props: LevelLeftProps) => (
  <StyledDiv {...props}/>
);

export default LevelLeft;
