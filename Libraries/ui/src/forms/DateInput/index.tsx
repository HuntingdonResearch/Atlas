import React, { FC, ForwardedRef, forwardRef } from 'react';
import styled from 'styled-components';
import { classNames } from './methods';
import { DateInputProps } from './props';

const StyledInput: any = styled.input.attrs((props: DateInputProps) => {
  const {
    name,
    placeholder,
    defaultValue = '',
    disabled,
    onChange
  }: DateInputProps = props;

  return ({
    className: classNames`${props}`,
    type: 'date',
    name,
    placeholder,
    defaultValue,
    disabled,
    onChange,
    onBlur: onChange
  });
})``;

const DateInput: FC<DateInputProps> = forwardRef((props: DateInputProps, ref: ForwardedRef<any>) => (
  <StyledInput ref={ref} {...props}/>
));

export default DateInput;
