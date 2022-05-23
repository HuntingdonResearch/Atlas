import React, { Children, cloneElement, FC } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import { ImageProps } from './props';
import { classNames } from './methods';

const StyledFigure: any = styled.figure.attrs((props: ImageProps) => ({
  className: classNames`${props}`
}))``;

const Image: FC<ImageProps> = (props: ImageProps) => {
  const {
    rounded,
    children
  }: ImageProps = props;

  const child: any = Children.only(children);

  return (
    <StyledFigure {...props}>
      {
        cloneElement(child, {
          ...child.props,
          className: clsx(
            child.props.className,
            rounded && 'is-rounded',
            child.type.name !== 'img' && 'has-ratio'
          )
        })
      }
    </StyledFigure>
  );
};

export default Image;
