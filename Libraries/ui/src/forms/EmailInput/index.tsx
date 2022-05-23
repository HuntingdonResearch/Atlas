import React, { FC, ForwardedRef, forwardRef } from 'react';
import styled from 'styled-components';
import { classNames } from './methods';
import { EmailInputProps } from './props';

const StyledInput: any = styled.input.attrs((props: EmailInputProps) => {
  const {
    name,
    placeholder,
    defaultValue = '',
    multiple,
    disabled,
    onChange
  }: EmailInputProps = props;

  return ({
    className: classNames`${props}`,
    type: 'email',
    name,
    placeholder,
    defaultValue,
    multiple,
    disabled,
    onChange,
    onBlur: onChange
  });
})``;

const EmailInput: FC<EmailInputProps> = forwardRef((props: EmailInputProps, ref: ForwardedRef<any>) => (
  <StyledInput ref={ref} {...props}/>
));

export default EmailInput;
