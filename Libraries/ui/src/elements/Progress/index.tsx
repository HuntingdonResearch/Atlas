import React, { FC } from 'react';
import styled from 'styled-components';
import { classNames } from './methods';
import { ProgressProps } from './props';

const StyledProgress: any = styled.progress.attrs((props: ProgressProps): any => ({
  className: classNames`${props}`
}))``;

const Progress: FC<ProgressProps> = (props: ProgressProps) => (
  <StyledProgress {...props}/>
);

export default Progress;
