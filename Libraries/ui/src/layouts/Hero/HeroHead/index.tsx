import React, { FC } from 'react';
import styled from 'styled-components';
import { classNames } from './methods';
import { HeroHeadProps } from './props';

const StyledDiv: any = styled.div.attrs((props: HeroHeadProps) => ({
  className: classNames`${props}`
}))``;

const HeroHead: FC<HeroHeadProps> = (props: HeroHeadProps) => {
  const {
    children
  } = props;

  return (
    <StyledDiv {...props}>
      {children}
    </StyledDiv>
  );
};

export default HeroHead;
