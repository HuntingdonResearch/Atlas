import React, { FC, ForwardedRef, forwardRef } from 'react';
import styled from 'styled-components';
import { classNames } from './methods';
import { ColorInputProps } from './props';

const StyledInput: any = styled.input.attrs((props: ColorInputProps) => {
  const {
    name,
    placeholder,
    defaultValue = '#000000',
    disabled,
    onChange
  }: ColorInputProps = props;

  return ({
    className: classNames`${props}`,
    type: 'color',
    name,
    placeholder,
    defaultValue,
    disabled,
    onChange,
    onBlur: onChange
  });
})``;

const ColorInput: FC<ColorInputProps> = forwardRef((props: ColorInputProps, ref: ForwardedRef<any>) => (
  <StyledInput ref={ref} {...props}/>
));

export default ColorInput;
