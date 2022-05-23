import React, { FC } from 'react';
import { isFunction, isUndefined } from 'lodash';
import styled from 'styled-components';
import { IconCollection } from '../../../types/IconCollection';
import { WhenFunc } from '../../../types/WhenFunc';
import Glyph from '../../../elements/Icon/Glyph';
import { classNames } from './methods';
import { PanelIconProps } from './props';

const DEFAULT_COLLECTION: IconCollection = 'fa';

const StyledSpan: any = styled.span.attrs((props: PanelIconProps) => ({
  className: classNames`${props}`,
  'aria-hidden': true
}))``;

const PanelIcon: FC<PanelIconProps> = (props: PanelIconProps) => {
  const {
    name,
    collection = DEFAULT_COLLECTION,
    scale,
    when,
    children,
    ...otherProps
  }: PanelIconProps = props;

  if (isFunction(when) ? !(when as WhenFunc)() : (!isUndefined(when) && !when)) {
    return null;
  }

  return (
    <StyledSpan {...otherProps}>
      <Glyph collection={collection} name={name} scale={scale}>
        {children}
      </Glyph>
    </StyledSpan>
  );
};

export default PanelIcon;
