import React, { FC, useCallback, useContext, useMemo } from 'react';
import styled from 'styled-components';
import { ReducerContext } from '../contexts';
import { anchorClassNames, listItemClassNames } from './methods';
import { TabsTabProps } from './props';

const StyledListItem: any = styled.li.attrs((props: TabsTabProps & { active?: boolean }) => ({
  className: listItemClassNames`${props}`
}))``;

const StyledAnchor: any = styled.a.attrs((props: TabsTabProps & { active?: boolean }) => ({
  className: anchorClassNames`${props}`
}))``;

const Tab: FC<TabsTabProps> = (props: TabsTabProps) => {
  const {
    index,
    children,
    onClick: handleClick = () => {},
    ...otherProps
  }: TabsTabProps = props;

  const { state } = useContext(ReducerContext);

  const active: boolean = useMemo(() => index === state.activeIndex, [index, state.activeIndex]);

  return (
    <StyledListItem active={active}>
      <StyledAnchor {...otherProps} active={active} onClick={handleClick}>
        {children}
      </StyledAnchor>
    </StyledListItem>
  );
}

export default Tab;
