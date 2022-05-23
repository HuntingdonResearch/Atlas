import React, { FC, useContext, useMemo } from 'react';
import styled from 'styled-components';
import { ReducerContext } from '../contexts';
import { classNames } from './methods';
import { PanelBlockProps } from './props';

const StyledDiv: any = styled.div.attrs((props: PanelBlockProps & { active?: boolean }) => ({
  className: classNames`${props}`
}))``;

const PanelBlock: FC<PanelBlockProps> = (props: PanelBlockProps) => {
  const {
    group,
    children,
    ...otherProps
  }: PanelBlockProps = props;

  const { state } = useContext(ReducerContext);

  const active: boolean = useMemo(() => group === state.activeGroup, [group, state.activeGroup]);

  return (
    <StyledDiv active={active} {...otherProps}>
      {children}
    </StyledDiv>
  );
}

export default PanelBlock;
