import React, { FC, ForwardedRef, forwardRef } from 'react';
import styled from 'styled-components';
import { classNames } from './methods';
import { TimeInputProps } from './props';

const StyledInput: any = styled.input.attrs((props: TimeInputProps) => {
  const {
    name,
    placeholder,
    defaultValue = '',
    disabled,
    onChange
  }: TimeInputProps = props;

  return ({
    className: classNames`${props}`,
    type: 'time',
    name,
    placeholder,
    defaultValue,
    disabled,
    onChange,
    onBlur: onChange
  });
})``;

const TimeInput: FC<TimeInputProps> = forwardRef((props: TimeInputProps, ref: ForwardedRef<any>) => (
  <StyledInput ref={ref} {...props}/>
));

export default TimeInput;
