import React, { FC, ForwardedRef, forwardRef } from 'react';
import styled from 'styled-components';
import { HiddenInputProps } from './props';

const StyledInput: any = styled.input.attrs((props: HiddenInputProps) => {
  const {
    name,
    defaultValue = '',
  }: HiddenInputProps = props;

  return ({
    type: 'hidden',
    name,
    defaultValue
  });
})``;

const HiddenInput: FC<HiddenInputProps> = forwardRef((props: HiddenInputProps, ref: ForwardedRef<any>) => (
  <StyledInput ref={ref} {...props}/>
));

export default HiddenInput;
