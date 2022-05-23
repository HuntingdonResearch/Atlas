import React, { FC, ForwardedRef, forwardRef } from 'react';
import styled from 'styled-components';
import { classNames } from './methods';
import { RangeInputProps } from './props';

const StyledInput: any = styled.input.attrs((props: RangeInputProps) => {
  const {
    name,
    placeholder,
    defaultValue,
    min = 0,
    max = 100,
    step = 1,
    disabled,
    onChange
  }: RangeInputProps = props;

  return ({
    className: classNames`${props}`,
    type: 'range',
    name,
    placeholder,
    defaultValue: defaultValue || max < min ? min : min + (max - min) / 2,
    min,
    max,
    step,
    disabled,
    onChange,
    onBlur: onChange
  });
})``;


const RangeInput: FC<RangeInputProps> = forwardRef((props: RangeInputProps, ref: ForwardedRef<any>) => (
  <StyledInput ref={ref} {...props}/>
));

export default RangeInput;
