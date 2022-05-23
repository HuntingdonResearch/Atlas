import React, { FC } from 'react';
import styled from 'styled-components';
import { classNames } from './methods';
import { ButtonProps } from './props';

const StyledButton: any = styled.button.attrs((props: ButtonProps) => {
  const {
    disabled,
    onClick
  }: ButtonProps = props;

  return ({
    className: classNames`${props}`,
    disabled,
    loading: props['loading'] ? 'true' : undefined,
    onClick
  });
})``;

const Button: FC<ButtonProps> = (props: ButtonProps) => (
  <StyledButton {...props}/>
);

export * from './props';

export default Button;
