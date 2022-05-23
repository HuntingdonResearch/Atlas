import React, { FC } from 'react';
import styled from 'styled-components';
import { classNames } from './methods';
import { TagsProps } from './props';

const StyledDiv: any = styled.div.attrs((props: TagsProps) => ({
  className: classNames`${props}`
}))``;

const Tags: FC<TagsProps> = (props: TagsProps) => (
  <StyledDiv {...props}/>
);

export default Tags;
