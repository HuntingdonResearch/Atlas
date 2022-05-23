import React, { FC } from 'react';
import styled from 'styled-components';
import { classNames } from './methods';
import { AddonProps } from './props';

const StyledDiv: any = styled.div.attrs((props: AddonProps) => ({
  className: classNames`${props}`
}))``;

const Addon: FC<AddonProps> = (props: AddonProps) => (
  <StyledDiv {...props}/>
);

export default Addon;
