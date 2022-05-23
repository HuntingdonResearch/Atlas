import React, { FC, ForwardedRef, forwardRef } from 'react';
import styled from 'styled-components';
import Label from '../Label';
import { classNames } from './methods';
import { SwitchInputProps } from './props';

const StyledInput: any = styled.input.attrs((props: SwitchInputProps) => ({
  type: 'checkbox',
  className: classNames`${props}`
}))``;

const SwitchInput: FC<SwitchInputProps> = forwardRef((props: SwitchInputProps, ref: ForwardedRef<any>) => {
  const {
    name,
    checked = false,
    size,
    children,
    onClick
  }: SwitchInputProps = props;

  return (
    <>
      <StyledInput ref={ref} id={name} name={name} size={size} checked={checked} onClick={onClick}/>
      <Label htmlFor={name} size={size}>
        {children}
      </Label>
    </>
  );
});

export default SwitchInput;
