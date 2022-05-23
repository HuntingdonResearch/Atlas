import React, { FC, ForwardedRef, forwardRef } from 'react';
import styled from 'styled-components';
import { classNames } from './methods';
import { NumberInputProps } from './props';

const StyledInput: any = styled.input.attrs((props: NumberInputProps) => {
  const {
    name,
    placeholder,
    defaultValue,
    min,
    max,
    step,
    disabled,
    onChange
  }: NumberInputProps = props;

  return ({
    className: classNames`${props}`,
    type: 'number',
    name,
    placeholder,
    defaultValue,
    min,
    max,
    step,
    disabled,
    onChange,
    onBlur: onChange
  });
})``;

const NumberInput: FC<NumberInputProps> = forwardRef((props: NumberInputProps, ref: ForwardedRef<any>) => (
  <StyledInput ref={ref} {...props}/>
));

export default NumberInput;
