import React, { FC, useReducer } from 'react';
import styled from 'styled-components';
import PanelBlock from './PanelBlock';
import PanelTabContent from './PanelTabContent';
import PanelHeading from './PanelHeading';
import PanelIcon from './PanelIcon';
import PanelTab from './PanelTab';
import PanelTabs from './PanelTabs';
import { ReducerContext } from './contexts';
import { classNames, reduce } from './methods';
import { PanelProps } from './props';
import { PanelSubComponents } from './sub-components';

const StyledNav: any = styled.nav.attrs((props: PanelProps) => ({
  className: classNames`${props}`
}))``;

const Panel: FC<PanelProps> & PanelSubComponents = (props: PanelProps) => {
  const {
    initialGroup,
    children,
    ...otherProps
  }: PanelProps = props;

  const [state, dispatch] = useReducer(reduce, {
    selectedGroup: initialGroup,
    activeName: null
  });

  return (
    <ReducerContext.Provider value={{ state, dispatch }}>
      <StyledNav {...otherProps}>
        {children}
      </StyledNav>
    </ReducerContext.Provider>
  );
};

Panel.Heading = PanelHeading;

Panel.Block = PanelBlock;

Panel.TabContent = PanelTabContent;

Panel.Tabs = PanelTabs;

Panel.Tab = PanelTab;

Panel.Icon = PanelIcon;

export default Panel;
