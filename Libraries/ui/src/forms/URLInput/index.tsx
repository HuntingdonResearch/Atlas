import React, { FC, ForwardedRef, forwardRef } from 'react';
import styled from 'styled-components';
import { classNames } from './methods';
import { URLInputProps } from './props';

const StyledInput: any = styled.input.attrs((props: URLInputProps) => {
  const {
    name,
    placeholder,
    defaultValue = '',
    disabled,
    onChange
  }: URLInputProps = props;

  return ({
    className: classNames`${props}`,
    type: 'url',
    name,
    placeholder,
    defaultValue,
    disabled,
    onChange,
    onBlur: onChange
  });
})``;

const URLInput: FC<URLInputProps> = forwardRef((props: URLInputProps, ref: ForwardedRef<any>) => (
  <StyledInput ref={ref} {...props}/>
));

export default URLInput;
