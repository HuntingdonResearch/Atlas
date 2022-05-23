import React, { FC } from 'react';
import styled from 'styled-components';
import { classNames } from './methods';
import { HeroFootProps } from './props';

const StyledDiv: any = styled.div.attrs((props: HeroFootProps) => ({
  className: classNames`${props}`
}))``;

const HeroFoot: FC<HeroFootProps> = (props: HeroFootProps) => {
  const {
    children
  } = props;

  return (
    <StyledDiv {...props}>
      {children}
    </StyledDiv>
  );
};

export default HeroFoot;
