import React, { FC, ForwardedRef, forwardRef } from 'react';
import styled from 'styled-components';
import { classNames } from './methods';
import { MonthInputProps } from './props';

const StyledInput: any = styled.input.attrs((props: MonthInputProps) => {
  const {
    name,
    placeholder,
    defaultValue = '',
    disabled,
    onChange
  }: MonthInputProps = props;

  return ({
    className: classNames`${props}`,
    type: 'month',
    name,
    placeholder,
    defaultValue,
    disabled,
    onChange,
    onBlur: onChange
  });
})``;

const MonthInput: FC<MonthInputProps> = forwardRef((props: MonthInputProps, ref: ForwardedRef<any>) => (
  <StyledInput ref={ref} {...props}/>
));

export default MonthInput;
