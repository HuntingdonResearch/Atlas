import React, { FC } from 'react';
import styled from 'styled-components';
import { classNames } from './methods';
import { FooterProps } from './props';

const StyledFooter: any = styled.footer.attrs((props: FooterProps): any => ({
  className: classNames`${props}`
}))``;

const Footer: FC<FooterProps> = (props: FooterProps) => (
  <StyledFooter {...props}/>
);

export default Footer;
