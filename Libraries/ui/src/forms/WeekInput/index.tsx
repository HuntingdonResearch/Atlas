import React, { FC, ForwardedRef, forwardRef } from 'react';
import styled from 'styled-components';
import { classNames } from './methods';
import { WeekInputProps } from './props';

const StyledInput: any = styled.input.attrs((props: WeekInputProps) => {
  const {
    name,
    placeholder,
    defaultValue = 1,
    min,
    max,
    disabled,
    onChange
  }: WeekInputProps = props;

  return ({
    className: classNames`${props}`,
    type: 'week',
    name,
    placeholder,
    defaultValue,
    min,
    max,
    disabled,
    onChange,
    onBlur: onChange
  });
})``;

const WeekInput: FC<WeekInputProps> = forwardRef((props: WeekInputProps, ref: ForwardedRef<any>) => (
  <StyledInput ref={ref} {...props}/>
));

export default WeekInput;
