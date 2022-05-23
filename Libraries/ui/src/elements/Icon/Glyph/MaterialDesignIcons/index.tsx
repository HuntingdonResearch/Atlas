import React, { FC } from 'react';
import styled from 'styled-components';
import { GlyphProps } from '../props';
import { classNames } from './methods';

const StyledI: any = styled.i.attrs((props: GlyphProps) => ({
  className: classNames`${props}`
}))``;

const Glyph: FC<GlyphProps> = (props: GlyphProps) => (
  <StyledI {...props}/>
);

export default Glyph;

export { isMaterialDesignIconsCollection } from './methods';
