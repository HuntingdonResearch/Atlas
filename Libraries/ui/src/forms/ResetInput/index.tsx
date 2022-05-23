import React, { FC, ForwardedRef, forwardRef } from 'react';
import styled from 'styled-components';
import { classNames } from './methods';
import { ResetInputProps } from './props';

const StyledInput: any = styled.input.attrs((props: ResetInputProps) => {
  const {
    name,
    defaultValue = '',
    disabled,
    children,
    onClick
  }: ResetInputProps = props;

  return ({
    className: classNames`${props}`,
    type: 'reset',
    name,
    defaultValue: defaultValue || children,
    disabled,
    onClick,
    children: null
  });
})``;


const ResetInput: FC<ResetInputProps> = forwardRef((props: ResetInputProps, ref: ForwardedRef<any>) => (
  <StyledInput ref={ref} {...props}/>
));

export default ResetInput;
