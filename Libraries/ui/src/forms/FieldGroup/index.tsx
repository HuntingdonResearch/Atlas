import React, { FC } from 'react';
import styled from 'styled-components';
import { classNames } from './methods';
import { FieldGroupProps } from './props';

const StyledDiv: any = styled.div.attrs((props: FieldGroupProps) => ({
  className: classNames`${props}`
}))``;

const FieldGroup: FC<FieldGroupProps> = (props: FieldGroupProps) => (
  <StyledDiv {...props}/>
);

export default FieldGroup;
