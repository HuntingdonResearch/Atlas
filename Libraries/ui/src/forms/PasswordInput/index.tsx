import React, { FC, ForwardedRef, forwardRef } from 'react';
import styled from 'styled-components';
import { classNames } from './methods';
import { PasswordInputProps } from './props';

const StyledInput: any = styled.input.attrs((props: PasswordInputProps) => {
  const {
    name,
    placeholder,
    defaultValue = '',
    disabled,
    onChange
  }: PasswordInputProps = props;

  return ({
    className: classNames`${props}`,
    type: 'password',
    name,
    placeholder,
    defaultValue,
    disabled,
    onChange,
    onBlur: onChange
  });
})``;


const PasswordInput: FC<PasswordInputProps> = forwardRef((props: PasswordInputProps, ref: ForwardedRef<any>) => (
  <StyledInput ref={ref} {...props}/>
));

export default PasswordInput;
