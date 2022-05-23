import React, { FC } from 'react';
import styled from 'styled-components';
import { classNames } from './methods';
import { DeleteProps } from './props';

const StyledButton: any = styled.button.attrs((props: DeleteProps): any => ({
  className: classNames`${props}`
}))``;

const Delete: FC<DeleteProps> = (props: DeleteProps) => (
  <StyledButton {...props}/>
);

export default Delete;
