import React, { Children, FC } from 'react';
import styled from 'styled-components';
import { isUndefined } from 'lodash';
import Icon from '../../elements/Icon';
import { calculateWhen, classNames } from './methods';
import { ControlProps } from './props';

const StyledDiv: any = styled.div.attrs((props: ControlProps & { icons: 'both' | 'left' | 'right' | 'none' }) => ({
  className: classNames`${props}`
}))``;

const Control: FC<ControlProps> = (props: ControlProps) => {
  const {
    as,
    children
  }: ControlProps = props;

  const leftIcon = Children
    .toArray(children)
    .filter((child: any) => child.type === Icon && child.props.position === 'left' && calculateWhen(child.props.when))
    .shift();

  const rightIcon = Children
    .toArray(children)
    .filter((child: any) => child.type === Icon && child.props.position === 'right' && calculateWhen(child.props.when))
    .shift();

  const icons: string = !isUndefined(leftIcon) && !isUndefined(rightIcon)
    ? 'both'
    : !isUndefined(leftIcon) && isUndefined(rightIcon)
      ? 'left'
      : isUndefined(leftIcon) && !isUndefined(rightIcon)
        ? 'right'
        : 'none';

  return (
    <StyledDiv icons={icons} as={as}>
      {children}
    </StyledDiv>
  );
};

export default Control;
