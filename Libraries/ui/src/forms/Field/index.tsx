import React, { Children, FC } from 'react';
import styled from 'styled-components';
import Addon from '../Addon';
import { classNames } from './methods';
import { FieldProps } from './props';

const StyledDiv: any = styled.div.attrs((props: FieldProps & { 'has-addons': boolean }) => ({
  className: classNames`${props}`
}))``;

const Field: FC<FieldProps> = (props: FieldProps) => {
  const {
    horizontal,
    grouped,
    alignment,
    children,
    ...otherProps
  }: FieldProps = props;

  if (horizontal) {
    return (
      <>
        {
          children
        }
      </>
    );
  }

  const hasAddons = Children
    .toArray(children)
    .some((child: any) => child.type === Addon);

  return (
    <StyledDiv {...{
      horizontal,
      grouped: grouped || !!alignment,
      alignment,
      'has-addons': hasAddons,
      ...otherProps
    }}>
      {children}
    </StyledDiv>
  );
};

export default Field;
