import React, { FC } from 'react';
import styled from 'styled-components';
import { classNames } from './methods';
import { PanelHeadingProps } from './props';

const StyledParagraph: any = styled.p.attrs((props: PanelHeadingProps) => ({
  className: classNames`${props}`
}))``;

const PanelHeading: FC<PanelHeadingProps> = (props: PanelHeadingProps) => {
  const {
    children,
    ...otherProps
  }: PanelHeadingProps = props;

  return (
    <StyledParagraph {...otherProps}>
      {children}
    </StyledParagraph>
  );
}

export default PanelHeading;
