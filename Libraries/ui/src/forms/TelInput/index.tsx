import React, { FC, ForwardedRef, forwardRef } from 'react';
import styled from 'styled-components';
import { classNames } from './methods';
import { TelInputProps } from './props';

const StyledInput: any = styled.input.attrs((props: TelInputProps) => {
  const {
    name,
    placeholder,
    defaultValue = '',
    pattern,
    disabled,
    onChange
  }: TelInputProps = props;

  return ({
    className: classNames`${props}`,
    type: 'tel',
    name,
    placeholder,
    defaultValue,
    pattern,
    disabled,
    onChange,
    onBlur: onChange
  });
})``;


const TelInput: FC<TelInputProps> = forwardRef((props: TelInputProps, ref: ForwardedRef<any>) => (
  <StyledInput ref={ref} {...props}/>
));

export default TelInput;
