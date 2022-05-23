import React, { FC } from 'react';
import styled from 'styled-components';
import Delete from '../Delete';
import { classNames } from './methods';
import { TagProps } from './props';

const StyledSpan: any = styled.span.attrs((props: TagProps) => ({
  className: classNames`${props}`
}))``;

const Tag: FC<TagProps> = (props: TagProps) => {
  const {
    delete: asDelete,
    children,
    onDismiss: handleDismiss,
    ...otherProps
  }: TagProps = props;

  return handleDismiss && !asDelete
    ? (
      <StyledSpan {...otherProps}>
        {children}
        <Delete onClick={handleDismiss}/>
      </StyledSpan>
    )
    : (
      asDelete
        ? (
          <StyledSpan {...otherProps} delete onClick={handleDismiss}/>
        )
        : (
          <StyledSpan {...otherProps}>
            {children}
          </StyledSpan>
        )
    );
};

export default Tag;
