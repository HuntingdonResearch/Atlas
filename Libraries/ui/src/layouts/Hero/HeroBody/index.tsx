import React, { FC } from 'react';
import styled from 'styled-components';
import { classNames } from './methods';
import { HeroBodyProps } from './props';

const StyledDiv: any = styled.div.attrs((props: HeroBodyProps) => ({
  className: classNames`${props}`
}))``;

const HeroBody: FC<HeroBodyProps> = (props: HeroBodyProps) => {
  const {
    children
  } = props;

  return (
    <StyledDiv {...props}>
      {children}
    </StyledDiv>
  );
};

export default HeroBody;
