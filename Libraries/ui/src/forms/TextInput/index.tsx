import React, { FC, ForwardedRef, forwardRef } from 'react';
import styled from 'styled-components';
import { classNames } from './methods';
import { TextInputProps } from './props';

const StyledInput: any = styled.input.attrs((props: TextInputProps) => {
  const {
    name,
    placeholder,
    defaultValue = '',
    pattern,
    disabled,
    onChange
  }: TextInputProps = props;

  return ({
    className: classNames`${props}`,
    type: 'text',
    name,
    placeholder,
    defaultValue,
    pattern,
    disabled,
    onChange,
    onBlur: onChange
  });
})``;


const TextInput: FC<TextInputProps> = forwardRef((props: TextInputProps, ref: ForwardedRef<any>) => (
  <StyledInput ref={ref} {...props}/>
));

export default TextInput;
