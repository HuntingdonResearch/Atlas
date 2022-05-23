import React, { FC } from 'react';
import { isFunction, isUndefined } from 'lodash';
import styled from 'styled-components';
import { WhenFunc } from '../../types/WhenFunc';
import { classNames } from './methods';
import { HelpProps } from './props';

const StyledP: any = styled.p.attrs((props: HelpProps) => ({
  className: classNames`${props}`
}))``;

const Help: FC<HelpProps> = (props: HelpProps) => {
  const {
    when,
    children,
    ...otherProps
  }: HelpProps = props;

  if (isUndefined(when) ? false : isFunction(when) ? !(when as WhenFunc)() : !when) {
    return null;
  }

  return (
    <StyledP {...otherProps}>
      {children}
    </StyledP>
  );
};

export default Help;
