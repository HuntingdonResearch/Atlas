import React, { FC } from 'react';
import styled from 'styled-components';
import { classNames } from './methods';
import { LevelItemProps } from './props';

const StyledDiv: any = styled.div.attrs((props: LevelItemProps) => ({
  className: classNames`${props}`
}))``;

const LevelItem: FC<LevelItemProps> = (props: LevelItemProps) => (
  <StyledDiv {...props}/>
);

export default LevelItem;
