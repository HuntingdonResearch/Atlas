import React, { FC } from 'react';
import styled from 'styled-components';
import LevelItem from './LevelItem';
import LevelLeft from './LevelLeft';
import LevelRight from './LevelRight';
import { classNames } from './methods';
import { LevelProps } from './props';
import { LevelSubComponents } from './sub-components';

const StyledNav: any = styled.nav.attrs((props) => ({
  className: classNames`${props}`
}))``;

const Level: FC<LevelProps> & LevelSubComponents = (props: LevelProps) => (
  <StyledNav {...props}/>
);

Level.Item = LevelItem;

Level.Left = LevelLeft;

Level.Right = LevelRight;

export default Level;
