import React, { FC } from 'react';
import styled from 'styled-components';
import MediaContent from './MediaContent';
import MediaLeft from './MediaLeft';
import MediaRight from './MediaRight';
import { classNames } from './methods';
import { MediaProps } from './props';
import { MediaSubComponents } from './sub-components';

const StyledArticle: any = styled.article.attrs((props) => ({
  className: classNames`${props}`
}))``;

const Media: FC<MediaProps> & MediaSubComponents = (props: MediaProps) => (
  <StyledArticle {...props}/>
);

Media.Content = MediaContent;

Media.Left = MediaLeft;

Media.Right = MediaRight;

export default Media;
