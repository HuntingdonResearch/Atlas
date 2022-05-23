import React, { FC } from 'react';
import styled from 'styled-components';
import HeroBody from './HeroBody';
import HeroFoot from './HeroFoot';
import HeroHead from './HeroHead';
import { classNames } from './methods';
import { HeroProps } from './props';
import { HeroSubComponents } from './sub-components';

const StyledSection: any = styled.section.attrs((props: HeroProps) => ({
  className: classNames`${props}`
}))``;

const Hero: FC<HeroProps> & HeroSubComponents = (props: HeroProps) => {
  const {
    children
  } = props;

  return (
    <StyledSection {...props}>
      {children}
    </StyledSection>
  );
};

Hero.Head = HeroHead;

Hero.Body = HeroBody;

Hero.Foot = HeroFoot;

export default Hero;
