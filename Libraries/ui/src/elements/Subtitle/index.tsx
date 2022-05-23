import React, { FC } from 'react';
import styled from 'styled-components';
import { classNames } from './methods';
import { SubtitleProps } from './props';

const StyledH1: any = styled.h1.attrs((props: SubtitleProps) => ({
  className: classNames`${props}`
}))``;

const StyledH2: any = styled.h2.attrs((props: SubtitleProps) => ({
  className: classNames`${props}`
}))``;

const StyledH3: any = styled.h3.attrs((props: SubtitleProps) => ({
  className: classNames`${props}`
}))``;

const StyledH4: any = styled.h4.attrs((props: SubtitleProps) => ({
  className: classNames`${props}`
}))``;

const StyledH5: any = styled.h5.attrs((props: SubtitleProps) => ({
  className: classNames`${props}`
}))``;

const StyledH6: any = styled.h6.attrs((props: SubtitleProps) => ({
  className: classNames`${props}`
}))``;

const StyledP: any = styled.p.attrs((props: SubtitleProps) => ({
  className: classNames`${props}`
}))``;

const Subtitle: FC<SubtitleProps> = (props: SubtitleProps) => {
  const {
    size,
    children,
    ...otherProps
  }: SubtitleProps = props;

  switch (size) {
    case 1:
      return <StyledH1 size={size} {...otherProps}>{children}</StyledH1>;

    case 2:
      return <StyledH2 size={size} {...otherProps}>{children}</StyledH2>;

    case 3:
      return <StyledH3 size={size} {...otherProps}>{children}</StyledH3>;

    case 4:
      return <StyledH4 size={size} {...otherProps}>{children}</StyledH4>;

    case 5:
      return <StyledH5 size={size} {...otherProps}>{children}</StyledH5>;

    case 6:
      return <StyledH6 size={size} {...otherProps}>{children}</StyledH6>;

    default:
      return <StyledP size={size} {...otherProps}>{children}</StyledP>;
  }
};

export default Subtitle;
