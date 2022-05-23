import React, { FC } from 'react';
import styled from 'styled-components';
import { classNames } from './methods';
import { LabelProps } from './props';

const StyledLabel: any = styled.label.attrs((props: LabelProps) => {
  const {
    htmlFor
  }: LabelProps = props;

  return ({
    className: classNames`${props}`,
    htmlFor
  });
})``;

const Label: FC<LabelProps> = (props: LabelProps) => (
  <StyledLabel {...props}/>
);

export default Label;
