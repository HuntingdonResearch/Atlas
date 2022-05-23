import React, { FC } from 'react';
import styled from 'styled-components';
import { classNames } from './methods';
import { FieldBodyProps } from './props';

const StyledDiv: any = styled.div.attrs((props: FieldBodyProps) => ({
  className: classNames`${props}`
}))``;

const FieldBody: FC<FieldBodyProps> = (props: FieldBodyProps) => {
  const {
    children,
    ...otherProps
  }: FieldBodyProps = props;

  return (
    <StyledDiv {...otherProps}>
      {children}
    </StyledDiv>
  );
};

export default FieldBody;
