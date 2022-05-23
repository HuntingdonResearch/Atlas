import React, { FC, useContext, useMemo } from 'react';
import styled from 'styled-components';
import { ReducerContext } from '../contexts';
import { classNames } from './methods';
import { PanelTabProps } from './props';

const StyledAnchor: any = styled.a.attrs((props: PanelTabProps & { active?: boolean }) => ({
  className: classNames`${props}`
}))``;

const PanelTab: FC<PanelTabProps> = (props: PanelTabProps) => {
  const {
    group,
    children,
    onClick: handleClick = () => {},
    ...otherProps
  }: PanelTabProps = props;

  const { state } = useContext(ReducerContext);

  const active: boolean = useMemo(() => group === state.selectedGroup, [group, state.selectedGroup]);

  return (
    <StyledAnchor {...otherProps} active={active} onClick={handleClick}>
      {children}
    </StyledAnchor>
  );
}

export default PanelTab;
