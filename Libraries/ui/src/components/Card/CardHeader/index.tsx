import React, { FC } from 'react';
import styled from 'styled-components';
import Icon from '../../../elements/Icon';
import { classNames, iconClassNames, titleClassNames } from './methods';
import { CardHeaderProps } from './props';

const StyledHeader: any = styled.header.attrs((props: CardHeaderProps) => ({
  className: classNames`${props}`
}))``;

const StyledParagraph: any = styled.p.attrs((props: CardHeaderProps) => ({
  className: titleClassNames`${props}`
}))``;

const StyledButton: any = styled.button.attrs((props: CardHeaderProps) => ({
  className: iconClassNames`${props}`
}))``;

const CardHeader: FC<CardHeaderProps> = (props: CardHeaderProps) => {
  const {
    icon,
    label,
    children
  }: CardHeaderProps = props;

  return (
    <StyledHeader{...props}>
      <StyledParagraph>{children}</StyledParagraph>
      {
        !!icon && (
          <StyledButton aria-label={label}>
            <Icon name={icon}/>
          </StyledButton>
        )
      }
    </StyledHeader>
  );
};

export default CardHeader;
