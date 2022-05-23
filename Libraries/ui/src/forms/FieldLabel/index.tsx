import React, { FC } from 'react';
import styled from 'styled-components';
import { classNames } from './methods';
import { FieldLabelProps } from './props';

const StyledDiv: any = styled.div.attrs((props: FieldLabelProps) => ({
  className: classNames`${props}`
}))``;

const FieldLabel: FC<FieldLabelProps> = (props: FieldLabelProps) => {
  const {
    children,
    ...otherProps
  }: FieldLabelProps = props;

  return (
    <StyledDiv {...otherProps}>
      {children}
    </StyledDiv>
  );
};

export default FieldLabel;
