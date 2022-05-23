import React, { FC } from 'react';
import { isFunction, isUndefined } from 'lodash';
import styled from 'styled-components';
import Text from '../../elements/Text';
import { IconCollection } from '../../types/IconCollection';
import { WhenFunc } from '../../types/WhenFunc';
import Glyph from './Glyph';
import { classNames } from './methods';
import { IconProps } from './props';

const DEFAULT_COLLECTION: IconCollection = 'fa';

const StyledSpan: any = styled.span.attrs((props: IconProps) => ({
  className: classNames`${props}`
}))``;

const Icon: FC<IconProps> = (props: IconProps) => {
  const {
    name,
    collection = DEFAULT_COLLECTION,
    size,
    scale,
    tooltip,
    children,
    when,
    ...otherProps
  }: IconProps = props;

  if (isFunction(when) ? !(when as WhenFunc)() : (!isUndefined(when) && !when)) {
    return null;
  }

  return (
    <>
      <StyledSpan {...otherProps} data-tooltip={tooltip} aria-hidden={true}>
        <Glyph collection={collection} name={name} size={size} scale={scale}/>
      </StyledSpan>
      {
        children && <Text>{children}</Text>
      }
    </>
  );
};

export default Icon;
