import React, { FC, ForwardedRef, forwardRef } from 'react';
import styled from 'styled-components';
import { classNames } from './methods';
import { SubmitInputProps } from './props';

const StyledInput: any = styled.input.attrs((props: SubmitInputProps) => {
  const {
    name,
    defaultValue = '',
    disabled,
    children,
    onClick
  }: SubmitInputProps = props;

  return ({
    className: classNames`${props}`,
    type: 'submit',
    name,
    defaultValue: defaultValue || children,
    disabled,
    onClick,
    children: null
  });
})``;


const SubmitInput: FC<SubmitInputProps> = forwardRef((props: SubmitInputProps, ref: ForwardedRef<any>) => (
  <StyledInput ref={ref} {...props}/>
));

export default SubmitInput;
