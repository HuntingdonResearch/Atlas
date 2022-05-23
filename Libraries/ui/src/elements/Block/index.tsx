import React, { FC } from 'react';
import styled from 'styled-components';
import { classNames } from './methods';
import { BlockProps } from './props';

const StyledDiv: any = styled.div.attrs((props: BlockProps): any => ({
  className: classNames`${props}`
}))``;

const Block: FC<BlockProps> = (props: BlockProps) => (
  <StyledDiv {...props}/>
);

export default Block;
