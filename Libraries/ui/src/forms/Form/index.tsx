import React, { FC } from 'react';
import styled from 'styled-components';
import { classNames } from './methods';
import { FormProps } from './props';

const StyledForm: any = styled.form.attrs((props: FormProps) => ({
  className: classNames`${props}`,
  method: props.method,
  action: props.action
}))``;

const Form: FC<FormProps> = (props: FormProps) => {
  const {
    children,
    onSubmit: handleSubmit
  }: FormProps = props;

  return (
    <StyledForm onSubmit={handleSubmit}>
      {children}
    </StyledForm>
  );
};

export default Form;
